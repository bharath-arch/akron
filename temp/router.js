router.post("/founder", async (req, res) => {
    console.log(req.body.email);
    const isMatch = await User.findOne({ email: req.body.email });
    console.log(isMatch);
    if ((isMatch && isMatch.isVerified === true) || isMatch === null) {
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
      return res.status(409).json({ message: "mail is existing" }).end();
    }
  });