import express from "express";

import { Registraion } from "../models/comany_registration.js";

const router = express.Router();


router.post("/", async (req, res) => {

  
    
  const isMatch = await Registraion.findOne({ pan: req.body.pan });

  if (!isMatch) {
    const newCompany = new Registraion(req.body);
    const companySave = await newCompany.save();
    return res.status(201).json({ result: companySave, message: "data saved" });
  } 
  else {
    return res.status(401).json({message:"pan already exist"})
  }
});

export default router
