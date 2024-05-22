import mongoose from "mongoose";

const excelDataSchema = new mongoose.Schema({
  company_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  quaters: [String],
  incomeExpenses: [
    {
      metric: String,
      values: [Number],
    },
  ],
});

export const Excel_Data = mongoose.model("Excel_Data", excelDataSchema);
