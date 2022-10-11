import express from 'express';
import companies from '../company/company.js';
const company_route = express.Router();

//Post Method
company_route.post('/post', async (req, res,next) => {

    const data = new companies({
        companyname: req.body.companyname,

        companyphone: req.body. companyphone,
        companyaddress: req.body.companyaddress,

        companyemail:req.body.companyemail,
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
company_route.get('/getAll', async (req, res) => {
    try {
        const data = await Product.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
company_route.get('/getOne/:id', async (req, res) => {
    try {
        const data = await P.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
company_route.patch('/update/:id', async (req, res) => {
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
company_route.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    } 
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export default company_route;