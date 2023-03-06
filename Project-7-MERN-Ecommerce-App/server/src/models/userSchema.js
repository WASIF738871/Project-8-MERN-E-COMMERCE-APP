import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        trim:true,
        unique: true,
        maxlength: 10
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    },
    cpassword: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    tokens :[
        {
            token:{
                type: String,
                required: true
            }
        }
    ],
    carts: Array
}, { timestamps: true });

export default new mongoose.model("users", userSchema);