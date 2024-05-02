import { fileURLToPath } from "url";
import { dirname } from "path";
import { spawn } from "child_process";
import path from "path";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    // Extract query parameter from the request URL
    const { id } = req.query;
    console.log(id);

    // Get the directory name of the current module
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
        return res.status(200).json({ result: incomeExpenses });
        // Now you can use incomeExpenses in your Node.js application
    });

    // Handle errors
    pythonProcess.stderr.on("data", (data) => {
        console.error(`Error: ${data}`);
    });

    // Handle process exit
    pythonProcess.on("close", (code) => {
        console.log(`Python process exited with code ${code}`);
    });
});

export default router;
