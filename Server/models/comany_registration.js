import mongoose from "mongoose";

const companyRegistraion = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    linkedin_founder: { type: String },
    linkedin_company: { type: String },
    company_name: { type: String },
    sector: { type: String },
    market_cap: { type: String },
    address: { type: String },
    pan: { type: String },
    website: { type: String },
    previous_fundraising_rounds_discription: { type: String },
    product_discription: { type: String },
    traction: { type: String },
    revenue_and_making: { type: String },
    team_size: { type: Number },
    community_fund_raising_reason: { type: String },
    where_you_learn_about_us: { type: String },
    existing_commitments: { type: String },
    pitch: { type: String },
    financials: { type: String },
    amount_expected_to_raise: { type: Number },
    excel: { type: String },
    status: { type: Boolean, default: null },
    lots: { type: Number, default: null },
    lotsOriginal: { type: Number, default: null },
  },
  {
    timestamps: true,
  }
);

export const Registraion = mongoose.model(
  "companyregistration",
  companyRegistraion
);
