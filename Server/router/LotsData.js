import express from "express";
import { Userlots } from "../models/lotsUser.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // const { lots, companyName } = req.body;
    const companyId = req.body.id;
    const email = req.body.email;
    const CompanyName = req.body.companyName;
    const lots = req.body.lots;
    // console.log(companyId, email);

    // Check if a document with the same companyId and email already exists
    const isMatch = await Userlots.findOne({
      companyId: companyId,
      email: email,
    });
    console.log(isMatch);

    if (isMatch) {
      console.log("already exist");
      return res.status(201).json({ message: "already exist" });
    } else {
      console.log("Creating...");
      const newLots = new Userlots({ companyId, CompanyName, email, lots });
      await newLots.save();
      return res
        .status(201)
        .json({ message: "New lot entry created successfully" });
    }
  } catch (error) {
    console.error(error, "---");
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
