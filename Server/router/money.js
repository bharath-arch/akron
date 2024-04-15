import express from "express"

import { Money } from "../models/wallet.js"


const router = express.Router()


router.post("/",async (req,res)=>{

    const isMatch = await Money.findOne({id : req.body.id})
     
    // const amount = Money.findOne()

    if (!isMatch){
        const updatedAmount = new Money(req.body)
        const saveAmount = await updatedAmount.save()
        return res.status(201).json({result: saveAmount ,message : "amount_added"})
    }
    else{
        const add_amount = req.body.money

        console.log(isMatch.id);
        
        return res.status(409).json({result: add_amount , message:"id_not_available"}).end()
        
    }
})

export default router