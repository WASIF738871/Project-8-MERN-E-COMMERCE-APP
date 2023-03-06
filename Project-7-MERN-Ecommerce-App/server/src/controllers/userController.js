import users from "../models/userSchema.js";
import bcrypt from "bcrypt";
import emailValidator from 'email-validator';

import PasswordValidator from 'password-validator'

// Create a schema
const schema = new PasswordValidator();

// Add properties to it
schema
    .is().min(6)                                    // Minimum length 6
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(2)                                // Must have at least 2 digits


export const register = async (req, res) => {
    try {
        const { fname, email, mobile, password, cpassword } = req.body;

        if (Object.keys(req.body) < 1) {
            return res.status(400).send({ status: false, message: "Fill up the fields" });
        }
        for (let elm of Object.keys(req.body)) {
            if (elm.length === 0) {
                return res.status(400).send({ status: false, message: "Fill up the fields" });
            }
        }
        if (!fname) {
            return res.status(400).send({ status: false, message: "Enter your full name" });
        }
        if (!email) {
            return res.status(400).send({ status: false, message: "Enter your email" });
        }
        if (!emailValidator.validate(email)) {
            return res.status(400).send({ status: false, message: "Enter valid email" });
        }
        const unique = await users.findOne({ $or: [{ email: email }, { mobile: mobile }] });
        if (unique) {
            return res.status(400).send({ status: false, message: "email or mobile already exist" });
        }
        if (!mobile) {
            return res.status(400).send({ status: false, message: "Enter your mobile" });
        }
        if (mobile.length > 10) {
            return res.status(400).send({ status: false, message: "Enter your mobile in 10 digits" });
        }
        if (!password) {
            return res.status(400).send({ status: false, message: "Enter your password" });
        }
        if (password !== cpassword) {
            return res.status(400).send({ status: false, message: "repeat password dosen't match" });
        }
        if (!schema.validate(password)) {
            return res.status(400).send({ status: false, message: "Enter valid password which contains atleast one lowercase,uppercase,2digits and minimum length is 6" });
        }
        if (!cpassword) {
            return res.status(400).send({ status: false, message: "Enter your cpassworde" });
        }

        const saltRound = 10;
        req.body.password = await bcrypt.hash(password, saltRound)
        req.body.cpassword = await bcrypt.hash(cpassword, saltRound)

        const user = await users.create(req.body);
        return res.status(201).send({ status: true, message: "you are successfully registered", user: req.body });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}