import express from "express";
import dotenv from "dotenv";

import { connectMongoDB } from "./db/database.js";

import userRouter from "./router/router.js";
import kycRouter from "./router/kyc.js";
import companyRouter from "./router/company_Registration.js";
import amountUpdate from "./router/money.js";
import verifyOtp from "./router/verifyOtp.js";
import approveCompanyRouter from "./router/company_approve.js";
import adminLogin from "./router/adminLogin.js";
import companyDataRouter from "./router/company_Data.js";
import kycApprovalRouer from "./router/kyc_approval.js";
import userProfile from "./router/userProfile.js";
import LotsData from "./router/LotsData.js";
import addWithdrawmoney from "./router/addWithdrawmoney.js";
import squareData from "./router/square.js";
import companyDashbord from "./router/companyDashbord.js";
import companyWithdraw from "./router/companyWithdraw.js"
import cors from "cors";

const app = express();
app.use(cors());

dotenv.config();

app.use(express.json());

app.use(express.static("uploads"));
app.use('/companyWithdrawMoney',companyWithdraw)
app.use("/companyDashbord", companyDashbord);
app.use("/LotsData", LotsData);
app.use("/profile", userProfile);
app.use("/kyc_approval", kycApprovalRouer);
app.use("/register", userRouter);
app.use("/kyc", kycRouter);
app.use("/addmoney", amountUpdate);
app.use("/company_registration", companyRouter);
app.use("/company_approve", approveCompanyRouter);
app.use("/admin_login", adminLogin);
app.use("/company_data", companyDataRouter);
app.use("/uploads", express.static("uploads"));
app.use("/addWithdrawmoney", addWithdrawmoney);
app.use("/square", squareData);

app.get("/test", (req, res) => {
  res.json({ message: "Server working!" });
});
app.use("/verify-otp", verifyOtp);

app.listen(process.env.PORT, () => {
  connectMongoDB();
  console.log(`Server running on port :  http://localhost:${process.env.PORT}`);
});
