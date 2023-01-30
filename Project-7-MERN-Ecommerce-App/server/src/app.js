//importing
import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
const {PORT} = process.env;

//importing custom node modules
import "./db/connection.js";
import productRouter from './routes/productRoute.js'
// instance of express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use('/', productRouter)


// app listening
app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});

