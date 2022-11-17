import mongoose from "mongoose";
import  Express  from "express";
import cron from "node-cron"
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
// cron.schedule("* * * * * *", function(){
//     console.log("hello")
// LI.get('/getAll', async (req, res) => {
//     try {
//         const data = await Product.find();
//         res.json(data)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })
// })
// cron.schedule("* * * * * *", function(){
// //     console.log("hello")
    // LI.patch('/update/:id', async (req,res)=>{
//             try{
                // const id = req.params.id;
//                 // const updateData = req.body
//                 const Options = {new : true}
//                 const h = await create.findById(id)
//                 console.log( h)
//                 // const m = h.updated_date
//                 const d = h.created_date
//                 const date2 = h.updated_date
//                 var s =h.subscriber
                
//                 const oneDay = 1000 * 60 * 60 * 24;

//                 // Calculating the time difference between two dates
//                 const diffInTime = date2.getTime() - d.getTime();
                
                
//                 // Calculating the no. of days between two dates
//                 const diffInDays = Math.round(diffInTime / oneDay);
//                 console.log( diffInDays)
//                 if(s===true){
//                     if(diffInDays>=30){
//                         cron.schedule("*/20 * * * * *",async function(){                        console.log("helooo")
//                         s = false
//                         const result = await create.findByIdAndUpdate(id,{subscriber:s},Options)
//                         res.send(result)})}

                    
//                     else{
//                         res.send("second if")
//                     }}
                
//                 else{
//                     res.send("this data")
//                 }

                
//             }

//             catch(error){
//                 res.status(500).json({ message: error.message })
//             }

//         }
//         )
//     })


cron.schedule('*/10 * * * * *', async function(){

    try{
        const id = await create.find();
        console.log(id.length)
        if(id){
        for(let i=0; i<id.length; i++){
            console.log(i)
            let user = id[i];
            // console.log(user)
            const d = user.created_date
            // console.log("a",d)
            const date2 = user.updated_date
            var s =user.subscriber
            const oneDay = 1000 * 60 * 60 * 24;

            // Calculating the time difference between two dates
            const diffInTime = date2.getTime() - d.getTime();
            
            
            // Calculating the no. of days between two dates
            const diffInDays = Math.round(diffInTime / oneDay);
            console.log( diffInDays)
            if(s===true){
                // console.log("true",i)
                 
          if(diffInDays>=30){
                    // s = false
                    // const result = await create.findByIdAndUpdate(id)
                    const result = await create.findByIdAndUpdate(
                        id[i],
                         {subscriber: false } ,
                        { new: true }

                        );
                        console.log(result)
                    // console.log("111",result)
                }
                // else{
                //     i++;
                // }
                

            //         // res.send(result)}
    
            //     }
            //     else{
            //         res.send("second if")
            //         }
            
            // }
            // else{
            //     res.send("this data")
            }
           
            console.log("...........,........")
        }
        // const updateData = req.body
        // const Options = {new : true}
        // const h = await create.findById(id)
        // console.log( h)
        // const m = h.updated_date

        
        // const oneDay = 1000 * 60 * 60 * 24;

        // // Calculating the time difference between two dates
        // const diffInTime = date2.getTime() - d.getTime();
        
        
        // // Calculating the no. of days between two dates
        // const diffInDays = Math.round(diffInTime / oneDay);
        // console.log( diffInDays)
        // if(s===true){
        //     if(diffInDays>=30){
        //         cron.schedule("*/20 * * * * *",async function(){                        console.log("helooo")
        //         s = false
        //         const result = await create.findByIdAndUpdate(id,{subscriber:s},Options)
        //         res.send(result)})}

            
        //     else{
        //         res.send("second if")
        //     }
        // }
        
        // else{
        //     res.send("this data")
        // }

        
    }}

    catch(error){
        res.status(500).json({ message: error.message })
    }

}
)
// })

export default LI