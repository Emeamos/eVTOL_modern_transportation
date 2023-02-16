import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import userRoute from "./routes/userroute.js";
import evtolRoute from "./routes/evtolroute.js";

dotenv.config()
dbConnect()

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/evtol", evtolRoute);

const PORT = process.env.PORT || 5555
app.listen(PORT,console.log(`Server is running at ${PORT}`))