import express from "express";
import multer from "multer";
import { Userkyc } from "../models/kyc.js";

const router = express.Router();

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
  { name: "avatar", maxCount: 1 },
  { name: "ID_proof", maxCount: 1 },
  { name: "bank_account_photo", maxCount: 1 },
]);

router.post("/", cpUpload, async (req, res) => {
  try {
    const existingUser = await Userkyc.findOne({ email: req.body.email });
    // console.log(existingUser)
    

    if (existingUser) {
      console.log(existingUser);
      console.log("User already exists");
      return res.json({ message: "User already exists" });
    } else {
      const newUser = new Userkyc({ ...req.body });

      if (req.files) {
        newUser.avatar = req.files.avatar[0].filename; // Assuming single file for avatar

        if (req.files.ID_proof) {
          newUser.ID_proof = req.files.ID_proof[0].filename;
        }

        if (req.files.bank_account_photo) {
          newUser.bank_account_photo = req.files.bank_account_photo[0].filename;
        }
      }

      const savedUser = await newUser.save();
      return res.status(201).json({ result: savedUser, message: "User Created" }).end();
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
