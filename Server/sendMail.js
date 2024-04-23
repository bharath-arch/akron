import nodemailer from 'nodemailer'
//https://myaccount.google.com/apppasswords
export const sendMail = async(options)=>{
    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        // service:process.env.SMTP_SERVICE,
        auth:{
            user:'b8344001@gmail.com',
            pass:'sgwsjtyhhehlnmyo '
        }
    });


    const mailOptions = {
        from : 'b8344001@gmail.com',
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    await transporter.sendMail(mailOptions)


}