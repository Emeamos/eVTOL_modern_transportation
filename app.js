import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";

dotenv.config()
dbConnect()

const app = express();

app.use(express.json());


const PORT = process.env.PORT || 5555
app.listen(PORT,console.log(`Server is running at ${PORT}`))