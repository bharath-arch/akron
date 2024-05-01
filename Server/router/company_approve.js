import express from 'express'
import { Registraion } from "../models/comany_registration.js";


const router = express.Router()

router.get("/" , async (req,res)=>{
    
    const available_company = await Registraion.find()
    //console.log(available_company)
    return res.status(200).json({ message: "data", result : available_company });
})

export default router