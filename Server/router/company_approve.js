import express from 'express'
import { Registraion } from "../models/comany_registration.js";


const router = express.Router()

router.put("/:id" , async (req,res)=>{
    
    const id = req.params.id;
    console.log(id);
    const isMatch = await Registraion.findByIdAndUpdate(id,{status:true}); 
    //console.log(available_company)
    return res.status(200).json({ message: "message", result : isMatch });
})
router.put("/rejectCompany/:id" , async (req,res)=>{
    
    const id = req.params.id;
    console.log(id);
    const isMatch = await Registraion.findByIdAndUpdate(id,{status:false}); 
    //console.log(available_company)
    return res.status(200).json({ message: "message", result : isMatch });
})
router.get("/dashboard_data" , async (req,res)=>{
    const isMatch = await Registraion.find(); 
    //console.log(available_company)
    return res.status(200).json({ message: "message", result : isMatch });
})


export default router