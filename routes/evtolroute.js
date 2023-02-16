import express from "express";
import Evtol from "../model/evtolmodel";

const evtolRoute = express.Router();

evtolRoute.post("/register", async(req, res) => {
    const {serialNumber, model, weightLimit, batteryCapacity, state} = req.body;
    try {
        res.json({
            status: "success",
            data: "you've successfully register an evtol"
        })
    } catch (error) {
        res.json(error.message)
    }
})

export default evtolRoute