import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String
    },
    avatar: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    address: {
        type: String
    },
    gender: {
        type: String
    },
    organisationName: {
        type: String
    },
    details: {
        type: String
    }
}, {
    timestamps: true
})

export const User = mongoose.model('user', userSchema)




