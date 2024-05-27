import express from "express";
import { Userkyc } from "../models/kyc.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const email = req.query.email;
    console.log(email);
    const isMatch = await Userkyc.findOne({ email });

    console.log(isMatch);

    return res.status(200).json({ message: "success", result: isMatch });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
});

router.put("/updateuserDetail", async (req, res) => {
  const email = req.body.email;
  const formdata = req.body.formdata;
  console.log(email, formdata);
  const isMatch = await Userkyc.findOneAndUpdate({ email }, formdata);
  res.status(200).json({result:isMatch})
});

export default router;
