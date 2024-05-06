import { fileURLToPath } from "url";
import { dirname } from "path";
import { spawn } from "child_process";
import path from "path";
import express from "express";
import { Registraion } from "../../models/comany_registration.js";
import circularJSON from "circular-json";

const router = express.Router();
router.post("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const isMatch = await Registraion.findById(id); // Ensure to await the findById method

  if (isMatch) {
    const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // Full path to your Python script module
  const pythonModule = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "Python",
    "extract_data_from_txt.py"
  );

  // Spawn Python process
  const pythonProcess = spawn("python", [pythonModule, id]);

  // Listen for data on standard output
  pythonProcess.stdout.on("data", (data) => {
    const incomeExpenses = JSON.parse(data);
    return res.status(200).json({
        result: {incomeExpenses,isMatch} // Convert isMatch using circular-json
      });
  });

  // Handle errors
  pythonProcess.stderr.on("data", (data) => {
    console.error(`Error: ${data}`);
    return res.status(500).json({ error: "Internal server error" }); // Handle error response
  });

  // Handle process exit
  pythonProcess.on("close", (code) => {
    console.log(`Python process exited with code ${code}`);
  });
  } else {
    console.log("first");
  }

  // Get the directory name of the current module
  
});

export default router;
