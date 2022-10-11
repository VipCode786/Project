import express from 'express';
import Supplier from '../suppliers/supplier.js';
const supplier_route = express.Router();
//Post Method
supplier_route.post('/post', async (req, res,next) => {
    const data = new Supplier({
        Name: req.body.Name,
        Phone: req.body. Phone,
        Email:req.body.Email,
        BillingAddress:req.body.BillingAddress,
        ShippingAddress:req.body.ShippingAddress

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
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Supplier.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//Delete by ID Method
supplier_route.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Supplier.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    } 
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
export default supplier_route;