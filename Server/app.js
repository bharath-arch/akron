import express from "express"
import dotenv from "dotenv"


import {connectMongoDB} from "./db/database.js"

import userRouter from "./router/router.js"
import kycRouter from "./router/kyc.js"
import companyRouter from "./router/company_Registration.js"
import amountUpdate from "./router/money.js"
import verifyOtp from "./router/verifyOtp.js"
import approveCompanyRouter from './router/company_approve.js'
import adminLogin from './router/adminLogin.js'

const app = express()


dotenv.config()

app.use(express.json())
app.use(express.static('uploads'))


app.use('/register',userRouter)
app.use('/kyc',kycRouter)
app.use('/addmoney',amountUpdate)
app.use("/company_registration",companyRouter)
app.use('/company_approve',approveCompanyRouter)
app.use('/admin_login',adminLogin)
app.get('/test',(req,res)=>{
    res.json({message :"Server working!"})
})
app.use('/verify-otp',verifyOtp)

app.listen(process.env.PORT ,()=>{
    connectMongoDB()
    console.log(`Server running on port :  http://localhost:${process.env.PORT}`);
})