import express from "express";
import { Userkyc } from "../models/kyc.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("first");
    const existingUser = await Userkyc.find();
    console.log(existingUser);
    return res.status(201).json({ result: existingUser });
  } catch (err) {
    return res.status(401);
  }

  // console.log(existingUser)
});
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const isMatch = await Userkyc.findById(id);
    //console.log(available_company)
    return res.status(200).json({ result: isMatch });
  } catch (err) {
    console.log(err);
  }

  // console.log(existingUser)
});

export default router;
