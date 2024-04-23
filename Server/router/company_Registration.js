import express from "express";
import multer from "multer";
import { Registraion } from "../models/comany_registration.js";
import fs from "fs"
import path from "path";
const router = express.Router();
import { dirname,basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// console.log(path.resolve(__dirname))
// console.log(basename)
// console.log(filepath);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the directory to store uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Create unique filenames
  },
});

const upload = multer({ storage: storage });
const cpUpload = upload.fields([
  { name: "pitch", maxCount: 1 },
  { name: "financials", maxCount: 1 },
]);

router.post("/register", cpUpload, async (req, res) => {
  try {
    const existingUser = await Registraion.findOne({ pan: req.body.pan });
    console.log(existingUser);

    if (existingUser) {
      // console.log(req.file[0])
      // const filepath = )
      // console.log(filepath,'---')

      // fs.uns(path.join(__dirname,'..','/uploads/'+req.files?.pitch?.[0]?.filename))
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
