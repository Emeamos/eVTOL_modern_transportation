import mongoose from "mongoose";

const evtolSchema = new mongoose.Schema({

    serialNumber: {
        type: String,
        required:[true, "seriaNumber is needed"]
    },
    model:{
        type: String,
        required:[true, "model is needed"]
    },
    weightLimit:{
        type: Number,
        required:[true, "weight is needed"]
    },
    batteryCapacity:{
        type: Number,
        required:[true, "battery capacity is needed"]
    },
    state:{
        type: String,
        required:[true, "state is needed"]
    }

},
{
    timestamps: true,
    toJSON:{virtuals:true}
});


const Evtol = mongoose.model('Evtol', evtolSchema);

export default Evtol;