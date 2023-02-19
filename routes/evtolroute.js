import express from "express";
import Evtol from "../model/evtolmodel.js";




const evtolRoute = express.Router()

evtolRoute.post("/register", async(req, res) => {
    const {serialNumber, model, weightLimit, batteryCapacity, state} = req.body;
    
    try {
        if (!req.body){
            return  res.json({
                status: "error",
                message: "input all fields"
            });
          }
        const evtolfound = await Evtol.findOne({serialNumber});
        const evtol = await Evtol.create({
            serialNumber, 
            model, 
            weightLimit, 
            batteryCapacity, 
            state
            //user: req.userAuth
        })
            if (evtolfound){
                res.json({
                    status: "error",
                    message: "evtol already in use"
                })
            }else{
                res.json({
                status: "success",
                data: {evtol}
            })
        }
    } catch (error) {
        res.json(error.message)
    }
});

evtolRoute.get("/all-evtol", async(req, res) => {
    //const {serialNumber, model, weightLimit, batteryCapacity, state} = req.body;
     const allevtol = await Evtol.find();
         try {
            res.json({
                status: "success",
                data: {allevtol}
                })
         } catch (error) {
            res.json(error.message)
         }       
});

evtolRoute.put("/update-evtol", async(req, res) => {
    const {serialNumber, model, weightLimit, batteryCapacity, state} = req.body;
    
    try {
        if (!req.body){
            return  res.json({
                status: "error",
                message: "updated data can nit be empty"
            });
          }
        const evtolfound = await Evtol.findOneAndUpdate({serialNumber});
        const evtol = await Evtol.create({
            serialNumber, 
            model, 
            weightLimit, 
            batteryCapacity, 
            state
            //user: req.userAuth
        })
            res.json({
            status: "success",
            message: "evtol updated successfully"
        })
        
    } catch (error) {
        res.json(error.message)
    }
});

evtolRoute.delete("/delete-evtol", async(req, res) => {
    //const {serialNumber, model, weightLimit, batteryCapacity, state} = req.body;
        const {id} = req.params
        try {

            await Evtol.findOneAndDelete({_id:id});
     
                res.json({
                status: "success",
                message: "evtol deleted successfully"
                });
        } catch (error) {
            res.json(error.message)
        }
});








export default evtolRoute