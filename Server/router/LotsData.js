import express from "express";
import { Userlots } from "../models/lotsUser.js";

const router = express.Router();

router.put("/", async (req, res) => {
  try {
    // const { lots, companyName } = req.body;
    const companyId = req.body.id;
    const email = req.body.email;
    const companyName = req.body.companyName;
    const lots = req.body.lots;
    // console.log(companyId,companyName,email,lots);
    // Check if a document with the same companyId and email already exists
    const isMatch = await Userlots.findOne({
      companyId: companyId,
      email: email,
    });
    // console.log(isMatch);

    if (isMatch) {
      console.log("already exist");
      const updateLots = await Userlots.findOneAndUpdate(
        { companyId: companyId, email: email },
        { lots: lots }
      );
      return res.status(201).json({ message: "Updated" });
    } else {
      console.log("Creating...");
      const newLots = new Userlots({ companyId, companyName, email, lots });
      await newLots.save();
      return res.status(201).json({
        message: "New lot entry created successfully",
        result: newLots,
      });
    }
  } catch (error) {
    // console.error(error, "---");
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
