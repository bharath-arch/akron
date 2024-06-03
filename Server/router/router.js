import express from "express";
import { User } from "../models/user_models.js";
import { Registraion } from "../models/comany_registration.js";
import { sendMail } from "../sendMail.js";
import jwt from "jsonwebtoken";

const router = express();

router.post("/SignIn", async (req, res) => {

  const usertype = req.body.usertype;
  if(usertype === 'user'){
    console.log('user')
    const isMatch = await User.findOne({ email: req.body.email });
    console.log(isMatch);
    
    console.log(usertype)
  
    if (isMatch && isMatch.isVerified === true) {
      const otp = generateOTP(6);
  
      if (!req.body.email) {
        return res.status(400).json({ message: "mail is required" });
      }
  
      var token = jwt.sign({ email: req.body.email, otp: otp }, "shhhhh");
  
      await sendMail({
        email: req.body.email,
        subject: `opt : ${otp}`,
        message: "please check our mail",
      });
      return res.status(200).json({
        message: "please check your mail",
        token: token,
        email: req.body.email,
      });
    } else {
      return res.status(409).json({ message: "Sign up" }).end();
    }
  }
  else{
    console.log('founder')
    const isMatch = await Registraion.findOne({ email: req.body.email });
    console.log(isMatch);
    
    console.log(usertype)
  
    if (isMatch ) {
      const otp = generateOTP(6);
  
      if (!req.body.email) {
        return res.status(400).json({ message: "mail is required" });
      }
  
      var token = jwt.sign({ email: req.body.email, otp: otp }, "shhhhh");
  
      await sendMail({
        email: req.body.email,
        subject: `opt : ${otp}`,
        message: "please check our mail",
      });
      return res.status(200).json({
        message: "please check your mail",
        token: token,
        email: req.body.email,
      });
    } else {
      return res.status(409).json({ message: "Sign up" }).end();
    }
  }
  
});

router.post("/newUser", async (req, res) => {
  const email = req.body.email;
  const isMatch = await User.findOne({ email: req.body.email });

  if (isMatch) {
    if (!req.body.email) {
      return res.status(400).json({ message: "mail is required" });
    }
    return res.status(409).json({ message: "mail is existing" }).end();
  } else {
    const otp = generateOTP(6);
    if (!req.body.email) {
      return res.status(400).json({ message: "mail is required" });
    }
   
    const newUser = new User({ email: email, role: "user", isVerified: true });
    await newUser.save()

    var token = jwt.sign({ email: req.body.email, otp: otp }, "shhhhh");

    await sendMail({
      email: req.body.email,
      subject: `opt : ${otp}`,
      message: "please check our mail",
    });
    return res.status(200).json({
      message: "please check your mail",
      token: token,
      email: req.body.email,
    });
  }
});

export default router;

export function generateOTP(length) {
  const chars = "0123456789";
  let OTP = "";
  for (let i = 0; i < length; i++) {
    OTP += chars[Math.floor(Math.random() * chars.length)];
  }

  return OTP;
}

router.get("/email", async (req, res) => {});
