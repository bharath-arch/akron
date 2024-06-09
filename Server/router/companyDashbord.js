import express from "express";
import { Registraion } from "../models/comany_registration.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const email = req.query.email;
  // console.log(email);
  // console.log("CompanyDashboard");
  try {
    const company = await Registraion.findOne({ email: email });
    if (company) {
      return res.status(200).json({ result: company });
    } else {
      return res.status(403).json({ message: "Company not approved" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
