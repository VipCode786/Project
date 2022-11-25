import mongoose from "mongoose";
const counterSchema=new mongoose.Schema({
    id:{type:String
    },
    seq:{
        type:Number
    }
})
    const countemodel=mongoose.model("counter",counterSchema)
    export default countemodel;