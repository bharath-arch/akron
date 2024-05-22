import express from "express";
import { Registraion } from "../models/comany_registration.js";
import { Excel_Data } from "../models/excel_data.js";
import fetch from "node-fetch";
import * as XLSX from "xlsx";

const router = express.Router();

router.post("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Find registration by ID
    const isMatch = await Registraion.findById(id);

    if (isMatch) {
      try {
        const incomeExpenses = await Excel_Data.findOne({ company_id: id });
        if (incomeExpenses) {
          return res.status(200).json({
            result: { incomeExpenses, isMatch },
          });
        } else {
          const fileUrl = `http://localhost:4000/uploads/${isMatch.excel}`;

          // Read the file from URL
          const response = await fetch(fileUrl);
          const arrayBuffer = await response.arrayBuffer();

          // Parse Excel file
          const workbook = XLSX.read(arrayBuffer, { type: "array" });

          // Accessing the first worksheet
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const incomeExpensesdata = [];
          // Convert worksheet to JSON object
          const incomeExpenses = XLSX.utils.sheet_to_json(worksheet, {
            header: 1,
          });

          console.log(incomeExpenses);
          for (let i = 1; i < incomeExpenses.length; i++) {
            const values = incomeExpenses[i];
            const metric = values[0]; // Assuming the first element is the metric name
            values.shift(); // Remove the first element (metric name)

            // Check if values array is not empty
            if (values.length > 0) {
              // Push the metric and non-empty values to the incomeExpensesdata array
              incomeExpensesdata.push({
                metric: metric,
                values: values,
              });
            }
          }

          // Create a new Excel_Data document and save it to the database
          const newExcelData = new Excel_Data({
            quaters: incomeExpenses[0],
            company_id: id,
            incomeExpenses: incomeExpensesdata,
          });

          // Save the document
          await newExcelData.save();
          // Respond with the parsed data
          return res.status(200).json({
            result: { incomeExpenses: incomeExpensesdata, isMatch },
          });
        }
      } catch {
        console.log("No matching registration found");
        return res.status(404).json({ error: "Registration not found" });
      }
    } else {
      console.log("No matching registration found");
      return res.status(404).json({ error: "Registration not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
