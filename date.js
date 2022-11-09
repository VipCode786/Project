import mongoose from "mongoose";
import  Express  from "express";
const LI = Express.Router()
const dataSchema = new mongoose.Schema({
    name :{type:String},
    created_date: {type:Date, default:Date.now},
    updated_date:{type:Date, default:Date.now},
    subscriber:{
        required:true,
        type:Boolean,
        default:true
    }
})
const create = mongoose.model('create',dataSchema)

LI.post('/post',async (req,res)=>{
    const data  = create({name:req.body.name})
    try{
        const dataToSave =await data.save()
        {res.status(200).json(dataToSave)}
    }
    catch(error){
        res.status(200).json({message:error.message})
    }
})
LI.patch('/update/:id', async (req,res)=>{
    try{
        const id = req.params.id;
        // const updateData = req.body
        const Options = {new : true}
        const h = await create.findById(id)
        console.log( h)
        // const m = h.updated_date
        const d = h.created_date
        const date2 = h.updated_date
        var s =h.subscriber
        
        const oneDay = 1000 * 60 * 60 * 24;

        // Calculating the time difference between two dates
        const diffInTime = date2.getTime() - d.getTime();
        
          
        // Calculating the no. of days between two dates
        const diffInDays = Math.round(diffInTime / oneDay);
        console.log( diffInDays)
        if(s===true){
            if(diffInDays>=30){
                console.log("helooo")
                s = false
                const result = await create.findByIdAndUpdate(id,{subscriber:s},Options)
                res.send(result)
            }
            else{
                res.send("second if")
            }
        }
        else{
            res.send("this data")
        }

        
    }

    catch(error){
        res.status(500).json({ message: error.message })
    }

}
)
export default LI