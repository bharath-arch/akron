import express from 'express'

const router = express();

// const userData = {
//     email: process.env.ADMINEMAIL,
//     password: process.env.ADMINPASSWORD
// };

// console.log(email,password)
router.post('/',async (req,res)=>{
    
    const isEmailMatch = process.env.ADMINEMAIL === req.body.email;
    // console.log(isEmailMatch)
    const isPasswordMatch = process.env.ADMINPASSWORD === req.body.password;
    // console.log(isPasswordMatch)

    if(isEmailMatch && isPasswordMatch){

        return res.status(200).json({result:'sucess'})
    
    }
    else{
        return res.status(200).json({result:'failure'})
    }
    


})

export default router;