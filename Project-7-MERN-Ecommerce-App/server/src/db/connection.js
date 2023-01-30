import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const {CONNECTION_string} = process.env;

//mongoose connection

const options = {
    useNewUrlParser: true
}
mongoose.set('strictQuery', false);
mongoose.connect(CONNECTION_string, options)
.then(()=>console.log("mongoDB is CONNECTED"))
.catch((error)=>console.log(error));