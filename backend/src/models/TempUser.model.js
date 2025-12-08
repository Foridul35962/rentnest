import mongoose from "mongoose";

const tempSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'host', 'guest'],
        required: true,
        default: 'guest'
    },
    otp: {
        type: String,
        required: true
    },
    expiredOtp:{
        type: Date,
        required: true
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now,
        expires: 600
    }
}, {timestamps: true})

const TempUser = mongoose.model('TempUser', tempSchema)

export default TempUser