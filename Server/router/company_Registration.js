import express from "express";
import multer from "multer";
import { Registraion } from "../models/comany_registration.js";
import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the directory to store uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Create unique filenames
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // Define allowed video formats for "pitch" field
    const allowedVideoFormats = ["video/mp4", "video/mpeg", "video/avi"];
    // Define allowed PDF formats for "financials" field
    const allowedPdfFormats = ["application/pdf"];
    const allowedExcelFormats = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
    ];

    // Check the fieldname and its respective allowed formats
    if (
      file.fieldname === "pitch" &&
      allowedVideoFormats.includes(file.mimetype)
    ) {
      cb(null, true); // Accept the file
    } else if (
      file.fieldname === "financials" &&
      allowedPdfFormats.includes(file.mimetype)
    ) {
      cb(null, true); // Accept the file
    } else if (
      file.fieldname === "excel" &&
      allowedExcelFormats.includes(file.mimetype)
    ) {
      cb(null, true); // Accept the file
    } else {
      // Reject the file if it doesn't match any allowed format for the respective field
      cb(new Error("Unsupported file format."));
    }
  },
  // Add error handling for multer
  onError: function (err, next) {
    console.error("Multer error:", err);
    next(err);
  },
});

const cpUpload = upload.fields([
  { name: "pitch", maxCount: 1 },
  { name: "financials", maxCount: 1 },
  { name: "excel", maxCount: 1 },
]);

router.post("/register", cpUpload, async (req, res) => {
  try {
    //email added in findOne 5/30/2024 8:21 PM
    const existingUser = await Registraion.findOne({
      pan: req.body.pan,
      email: req.body.email,
    });
    console.log(existingUser);

    let lots = req.body.amount_expected_to_raise * 1000;

    if (existingUser) {
      console.log("User already exists");
      return res.json({ message: "User already exists" });
    } else {
      const newUser = new Registraion({ ...req.body, lots });

      // Check if any files were uploaded
      if (req.files) {
        newUser.pitch = req.files.pitch?.[0]?.filename; // Handle potential undefined value
        newUser.financials = req.files.financials?.[0]?.filename;
        newUser.excel = req.files.excel?.[0]?.filename;
      }

      const savedUser = await newUser.save();
      return res
        .status(201)
        .json({ result: savedUser, message: "User Created" })
        .end();
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/updateLots", async (req, res) => {
  try {
    const companyId = req.body.id;
    const email = req.body.email;
    const companyName = req.body.companyName;
    const lots = req.body.lots;

    console.log(email);
    const isMatch = await Registraion.findOne({ _id: companyId, email: email });
    const newLots = isMatch.lots - lots;
    if (isMatch) {
      try {
        const updateLots = await Registraion.findOneAndUpdate(
          { _id: companyId, email: email },
          { lots: newLots }
        );
      } catch {}
    }
    console.log(isMatch, "000");
    return res.status(200).json({ message: "sucess" });
  } catch (err) {
    console.log(err);
  }
});

export default router;
