import mongoose from "mongoose";


const money = mongoose.Schema({
    money: {type: Number},
    id: {type: Number},
},{
    timestamps: true,
})

export const Money = mongoose.model("money",money)