import express from "express";
import { Userlots } from "../models/lotsUser.js";

const router = express.Router();

router.put("/", async (req, res) => {
  try {
    const companyId = req.body.id;
    const email = req.body.email;
    const companyName = req.body.companyName;
    const lots = req.body.lots;

    // Check if a document with the same companyId and email already exists
    const isMatch = await Userlots.findOne({
      companyId: companyId,
      email: email,
    });

    if (isMatch) {
      const newLots = isMatch.lots + lots;
      await Userlots.findOneAndUpdate(
        { companyId: companyId, email: email },
        { lots: newLots }
      );
      return res.status(200).json({ message: "Updated" });
    } else {
      console.log("Creating...");
      const newLotEntry = new Userlots({ companyId, companyName, email, lots });
      await newLotEntry.save();
      return res.status(201).json({
        message: "New lot entry created successfully",
        result: newLotEntry,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/getLotData", async (req, res) => {
  try {
    const email = req.query.email;
    const isMatch = await Userlots.find({ email: email });
    if (isMatch) {
      return res.status(200).json({ message: "sucess", result: isMatch });
    }
  } catch (err) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
