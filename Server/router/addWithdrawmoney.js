import express from "express";
import { Money } from "../models/wallet.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const email = req.query.email;
  try {
    const isMatch = await Money.findOne({ email: email });
    if (isMatch) {
      return res.status(200).json({ message: "success", result: isMatch });
    } else {
      return res.status(404).json({ message: "Email not found" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server failure", error: err });
  }
});

router.put("/add", async (req, res) => {
  console.log("addWithdrawmoney");
  const email = req.body.email;
  const money = req.body.money;
  
  try {
    const isMatch = await Money.findOne({ email: email });
    if (isMatch) {
      const totalMoney = isMatch.money + money;
      await Money.findOneAndUpdate({ email: email }, { money: totalMoney });
      return res.status(200).json({ message: "Updated" });
    } else {
      const newData = new Money({ email, money });
      await newData.save();
      return res.status(201).json({ message: "Created new" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server failure", error: err });
  }
});

router.put("/withdraw", async (req, res) => {
  console.log("withdraw");
  const email = req.body.email;
  const money = req.body.money;

  try {
    const isMatch = await Money.findOne({ email: email });
    if (isMatch) {
      let newMoney = isMatch.money - money;
      if (newMoney < 0) {
        newMoney = 0; // Ensures that money does not go negative
      }
      await Money.findOneAndUpdate({ email: email }, { money: newMoney });
      return res.status(200).json({ message: "Success" });
    } else {
      return res.status(404).json({ message: "Email not found" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server failure", error: err });
  }
});

export default router;
