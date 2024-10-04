import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv";
import { error } from "console";
import router from "./routes/userroutes.js";

const app=express();
//Middleares

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 8000;
const mongourl = process.env.Mongourl;
mongoose.connect(mongourl).then(()=>{
    console.log("Database Connected Successfully");
    app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
  });
})  //http://localhost:3000/api/user/create
.catch((error)=>console.log("Error Generate"));

app.use("/api/user",router);