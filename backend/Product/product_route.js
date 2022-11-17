import express from 'express';
import Product from '../Product/product.js';
const product_route = express.Router();

//Post Method
product_route.post('/post', async (req, res,next) => {
   
    const data = new Product({
        Productname: req.body.Productname,
        MRP: req.body.MRP,
        Quantity: req.body.Quantity,
        Category: req.body.Category,
        LOW: req.body.LOW,
        HIGH:req.body.HIGH,
        Purchasing_details: req.body.Purchasing_details,
        Currency:req.body.Currency,
        Selling_Details: req.body.Selling_Details,
        Tax_Details: req.body.Tax_Details,
        
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
product_route.get('/getAll', async (req, res) => {
    try {
        const data = await Product.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
product_route.get('/getOne/:id', async (req, res) => {
    try {
        const data = await P.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
product_route.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Product.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
product_route.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export default product_route;