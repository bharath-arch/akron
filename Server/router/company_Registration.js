import express from "express";
import multer from "multer";
import { Registraion } from "../models/comany_registration.js";
import fs from "fs";
import path from "path";
const router = express.Router();
import { dirname } from 'path';
import { fileURLToPath } from 'url';

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
    const allowedVideoFormats = ['video/mp4', 'video/mpeg', 'video/avi'];
    // Define allowed PDF formats for "financials" field
    const allowedPdfFormats = ['application/pdf'];

    // Check the fieldname and its respective allowed formats
    if (file.fieldname === 'pitch' && allowedVideoFormats.includes(file.mimetype)) {
      cb(null, true); // Accept the file
    } else if (file.fieldname === 'financials' && allowedPdfFormats.includes(file.mimetype)) {
      cb(null, true); // Accept the file
    } else {
      // Reject the file if it doesn't match any allowed format for the respective field
      cb(new Error('Unsupported file format.'));
    }
  },
  // Add error handling for multer
  onError: function(err, next) {
    console.error('Multer error:', err);
    next(err);
  }
});




const cpUpload = upload.fields([
  { name: "pitch", maxCount: 1 },
  { name: "financials", maxCount: 1 },
]);

router.post("/register", cpUpload, async (req, res) => {
  try {
    const existingUser = await Registraion.findOne({ pan: req.body.pan });
    console.log(existingUser);

    if (existingUser) {
      console.log("User already exists");
      return res.json({ message: "User already exists" });
    } else {
      const newUser = new Registraion({ ...req.body });

      // Check if any files were uploaded
      if (req.files) {
        newUser.pitch = req.files.pitch?.[0]?.filename; // Handle potential undefined value
        newUser.financials = req.files.financials?.[0]?.filename;
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

export default router;
