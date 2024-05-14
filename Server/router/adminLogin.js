import express from 'express'

const router = express();

const userData = {
    email: 'b8344001@gmail.com',
    password: 'bharath@001'
};


router.post('/',async (req,res)=>{
    
    const isEmailMatch = userData.email === req.body.email;
    // console.log(isEmailMatch)
    const isPasswordMatch = userData.password === req.body.password;
    // console.log(isPasswordMatch)

    if(isEmailMatch && isPasswordMatch){

        return res.status(200).json({result:'sucess'})
    
    }
    else{
        return res.status(200).json({result:'failure'})
    }
    


})

export default router;