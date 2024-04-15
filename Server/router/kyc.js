
import express from "express"

import {Userkyc} from "../models/kyc.js"

const router = express.Router();

router.post("/",async (req,res)=> {
    
    const isMatch = await Userkyc.findOne({aadhar : req.body.aadhar});

    if(!isMatch){
        const newUserkyc = new Userkyc(req.body)
        const saveUserkyc = await newUserkyc.save()
        return res.status(201).json({result: saveUserkyc ,message : "new user saved"})
    }
    else {
        return res.status(409).json({message:"aadhar is existing"}).end();
    }
})

export default router;