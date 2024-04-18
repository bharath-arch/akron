import express from "express";

import { Userkyc } from "../models/kyc.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
        name,
        email,
        linkedin_url,
        address,
        pan,
        aadhar,
        contact_number,
        whattsapp,
        about_yourself,
        anual_income,
        bank_account_number,
        bank_account_photo,
        where_you_learn_about_us,
        avatar,
        ID_proof ,
    } = req.body;
    // Destructure email and password from request body

    const existingUser = await Userkyc.findOne({ email }); // Check for existing user

    if (existingUser) {
      console.log("User already exists");
      return res.json({ message: "User already exists" });
    } else {
      const newUser = new Userkyc({ name,
        email,
        linkedin_url,
        address,
        pan,
        aadhar,
        contact_number,
        whattsapp,
        about_yourself,
        anual_income,
        bank_account_number,
        bank_account_photo,
        where_you_learn_about_us,
        avatar,
        ID_proof }); // Create a new Login object
      await newUser.save(); // Save the new user to the database
      console.log("User created successfully");
      return res.json({ message: "User created successfully" });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal Server Error" }); // Generic error message for client
  }
});

//     const isMatch = await Userkyc.findOne({aadhar : req.body.aadhar});

//     if(!isMatch){
//         const newUserkyc = new Userkyc(req.body)
//         const saveUserkyc = await newUserkyc.save()
//         return res.status(201).json({result: saveUserkyc ,message : "new user saved"})
//     }
//     else {
//         return res.status(409).json({message:"aadhar is existing"}).end();
//     }
// })

export default router;
