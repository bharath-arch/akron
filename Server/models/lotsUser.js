import mongoose from "mongoose";

const lots = new mongoose.Schema(
  {
    companyId: { type: mongoose.Schema.Types.ObjectId },
    companyName: { type: String },
    email: { type: String },
    lots: { type: Number },
    amountInvested: { type: Number , default:0},
  },
  { timestamps: true }
);

export const Userlots = mongoose.model("lotsData", lots);
