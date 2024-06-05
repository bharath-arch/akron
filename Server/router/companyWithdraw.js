import express from "express";
import { CompanywithdrawMoney } from "../models/withDraw.js";

const router = express.Router();

router.put("/", async (req, res) => {
  const companyId = req.body.id;
  const email = req.body.email;
  const amount = req.body.amount;

  try {
    const isMatch = await CompanywithdrawMoney.findOne({
      email: email,
      companyId: companyId,
    });

    if (isMatch) {
      if (isMatch.status === true) {
        return res.status(200).json({ message: "Transaction completed" });
      } else {
        return res.status(200).json({ message: "Transaction pending" });
      }
    } else {
      console.log("Initiating new withdrawal");
      const newWithdrawal = new CompanywithdrawMoney({ ...req.body });
      await newWithdrawal.save();
      return res.status(200).json({ message: "New withdrawal created" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/accept", async (req, res) => {
  const companyId = req.body.id;
  const email = req.body.email;

  try {
    await CompanywithdrawMoney.findOneAndUpdate(
      {
        email: email,
        companyId: companyId,
      },
      { status: true }
    );
    return res.status(200).json({ message: "accept" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/reject", async (req, res) => {
    const companyId = req.body.id;
    const email = req.body.email;
  
    try {
      await CompanywithdrawMoney.findOneAndUpdate(
        {
          email: email,
          companyId: companyId,
        },
        { status: false }
      );
      return res.status(200).json({ message: "reject" });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

export default router;
