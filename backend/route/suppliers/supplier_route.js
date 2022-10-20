import express from 'express';
import Supplier from '../suppliers/supplier.js';
const supplier_route = express.Router();


//Post Method

//const countemodel=mongoose.model("counter",SupplierSchema);

supplier_route.post('/post', async (req, res,next) => {
    // Supplier.findOneAndUpdate(
    //     //{id:"autoval"},
    //     {"$inc":{"seq":1}},
    //     {new:true},(err,cd)=>{
    //         if(cd==null)
    //         {
    //             const newval=new Supplier({id:"autoval",seq:1})
    //             newval.save()
    //         }

    //     }
     // )
    // const searchField=req.body.Name;
     //const ddd =searchField.replace(/[ .]+/g, '')
     //const asd= await Supplier.find({Name:{$regex :searchField,$options:'i'}})
    const data = new Supplier({
        Name: req.body.Name,
        Phone: req.body. Phone,
        Email:req.body.Email,
        BillingAddress:req.body.BillingAddress,
        ShippingAddress:req.body.ShippingAddress,
        disabled:req.body.disabled,

        }

    )
 try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
supplier_route.get('/getAll', async (req, res) => {
    try {

        const data = await Supplier.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
supplier_route.get('/getOne/:id', async (req, res) => {

    try {
        const data = await Supplier.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
supplier_route.patch('/update/:id', async (req, res) => {
    try {
       // const disabled=req.body.disabled;

        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };


       // const len=updatedData.length;
       // const tue = {require:true};
       // const ups={upsert:true};
        //console.log("req.body.Name",req.body.Name)
       const abc= await Supplier.findById(id)
var lk=true
       if (abc.disabled===false) {
        Object.keys(updatedData).forEach((key) => {
        if(!updatedData[key])
        lk=false
        // {res.status(500).json({ message: 'error' })}
      })

       if(lk)
       {
        const result = await Supplier.findByIdAndUpdate(
            id, updatedData,options
            //tue,ups
        )
        res.send(result)
       }
       else
       {res.status(500).json({ message: 'error' })}
       }


}
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//Delete by ID Method
supplier_route.delete('/delete/:id', async (req, res) => {

    try {
        const id = req.params.id;
      const data = await Supplier.findByIdAndUpdate(id,{disabled:true})
       // res.json(data)
        res.send(`Removeditem${data}`)
        // const id = req.params.id;
        // const data = await Supplier.findByIdAndDelete(id)
        // res.send({Deleteditem: data})
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
export default supplier_route;
