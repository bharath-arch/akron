import express from "express"

import {User} from "../models/user_models.js"

const router = express();

router.post('/',async (req,res)=> {
    const isMatch = await User.findOne({email : req.body.email});

    if(!isMatch){
        const newUser = new User(req.body)
        const saveUser = await newUser.save()
        return res.status(201).json({result: saveUser ,message : "new user saved"})
    }
    else {
        return res.status(409).json({message:"mail is existing"}).end();
    }
})

export default router;