import express from "express"
import dotenv from "dotenv"


import {connectMongoDB} from "./db/database.js"

import userRouter from "./router/router.js"
import kycRouter from "./router/kyc.js"
import companyRouter from "./router/company_Registration.js"
import amountUpdate from "./router/money.js"


const app = express()


dotenv.config()

app.use(express.json())

app.use('/register',userRouter)
app.use('/kyc',kycRouter)
app.use('/addmoney',amountUpdate)

app.use("/company_registration",companyRouter)

app.get('/test',(req,res)=>{
    req.json({message :"Server working!"})
})

app.listen(process.env.PORT ,()=>{
    connectMongoDB()
    console.log(`Server running on port :  http://localhost:${process.env.PORT}`);
})