import mongoose from "mongoose";

const money = mongoose.Schema(
  {
    money: { type: Number },

    email: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Money = mongoose.model("money", money);
