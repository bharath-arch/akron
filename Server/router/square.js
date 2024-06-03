import express from "express";
import { profileSquare } from "../models/square.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { formdata, selectedLots } = req.body;
  console.log(req.body);

  const companyId = selectedLots.companyId;
  const lots = formdata.lotSize;
  const companyName = selectedLots.companyName;
  const amount = formdata.lotSize * formdata.price;
  const email = formdata.email;
  console.log(companyId, lots, companyName, amount, email);

  try {
    if (formdata.lotSize > selectedLots.lots) {
      console.log("lotsize is greater");
      return res.status(400).json({ message: "Lot size is greater than available lots" });
    } else {
      const newSquare = new profileSquare({
        companyId: companyId,
        lots: lots,
        companyName: companyName,
        amount: amount,
        email: email,
      });
      await newSquare.save();
      return res.status(200).json({ message: "Transaction successful" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


router.get('/squareData' , async (req,res)=>{
    const result = await profileSquare.find()
    return res.status(200).json({ message: "" , result : result });
})

export default router;
