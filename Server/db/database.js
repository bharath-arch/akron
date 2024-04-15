import mongoose from "mongoose"

export const connectMongoDB =()=>{
    mongoose.connect(process.env.MONGODB_URL).then((result)=>{
        console.log(`host name ${result.connection.host}`);
        console.log(`db name ${result.connection.name}`);
    }).catch((err)=>{
        console.log(err);
    })
}