import express from "express";
import { CompanywithdrawMoney } from "../models/withDraw.js";

const router = express.Router();

router.put("/", async (req, res) => {
  console.log("first");

  try {
    const companyId = req.body.companyId;
    const email = req.body.email;
    const amount = req.body.amount;
    console.log(email, amount, companyId);
    const isMatch = await CompanywithdrawMoney.findOne({
      email: email,
      companyId: companyId,
    });

    console.log(isMatch);
    if (isMatch) {
      if (isMatch.status === "true") {
        return res.status(200).json({ message: "Transaction completed" });
      } else {
        return res.status(200).json({ message: "Transaction pending" });
      }
    } else {
      console.log("Initiating new withdrawal");
      const newWithdrawal = new CompanywithdrawMoney({
        ...req.body,
        status: "pending",
      });
      await newWithdrawal.save();
      return res.status(200).json({ message: "New withdrawal created" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/accept", async (req, res) => {
  console.log("accept")
  const companyId = req.body.companyId;
  const email = req.body.email;

  try {
    await CompanywithdrawMoney.findOneAndUpdate(
      {
        email: email,
        companyId: companyId,
      },
      { status: "true" }
    );
    return res.status(200).json({ message: "accept" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/reject", async (req, res) => {
  console.log("reject")

  const companyId = req.body.companyId;
  const email = req.body.email;

  try {
    await CompanywithdrawMoney.findOneAndUpdate(
      {
        email: email,
        companyId: companyId,
      },
      { status: "false" }
    );
    return res.status(200).json({ message: "reject" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/fetchData", async (req, res) => {
  try {
    const isMatch = await CompanywithdrawMoney.find();
    return res.status(200).json({ result: isMatch });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/status", async (req, res) => {
  const email = req.query.email
  console.log(email)
  try {
    const isMatch = await CompanywithdrawMoney.findOne({email:email});
    return res.status(200).json({ result: isMatch });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
