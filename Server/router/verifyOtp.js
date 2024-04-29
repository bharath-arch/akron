import express from "express"

import {User} from "../models/user_models.js"
import { sendMail } from "../sendMail.js";
import jwt from "jsonwebtoken";

const router = express();

router.post('/',async (req,res)=> {
    console.log("api working");
    
    if(!req.body.otp){
        return res.status(200).json({message:'otp is required'})
    }
    
    var decoded = jwt.verify(req.body.token, 'shhhhh');
   
    console.log(decoded,'-')

    if(parseInt(decoded.otp)=== parseInt(req.body.otp)){
        console.log(req.body.otp,'---');
        const newUser = await User({email:decoded.email,isVerified:true})

        const savedUer = await newUser.save()

        return res.status(200).json({message:'user created',result:savedUer})
    }else{
        console.log('error')
        return res.status(200).json({message:'wrong otp '})

    }
})

export default router;
