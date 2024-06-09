import mongoose from "mongoose";

const withDraw = mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId },
  amount: { type: Number },
  email: { type: String },
  status: { type: String, default: "null" },
});

export const CompanywithdrawMoney = mongoose.model("withdraw", withDraw);
