import mongoose from "mongoose";

const square = mongoose.Schema(
  {
    companyId: { type: mongoose.Schema.Types.ObjectId },
    lots: { type: Number },
    amount: { type: Number },
    companyName: { type: String },
    companySector:{ type: String },
    email: { type: String },
  },
  { timestamp: true }
);

export const profileSquare = mongoose.model("square", square);
