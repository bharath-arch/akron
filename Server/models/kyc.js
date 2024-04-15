import mongoose from "mongoose";

const kyc = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    linkedin_url: { type: String },
    address: { type: String },
    pan: { type: String },
    aadhar: { type: Number },
    contact_number: { type: Number },
    whattsapp: { type: Number },
    about_yourself: { type: String },
    anual_income: { type: Number },
    bank_account_number: { type: Number },
    bank_account_photo: { type: String },
    where_you_learn_about_us: { type: String },
    existing_commitments: { type: String },
    avatar: { type: String },
    ID_proof: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Userkyc = mongoose.model("userkyc", kyc);
