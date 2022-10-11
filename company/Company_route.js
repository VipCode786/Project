import express from "express";

import companies from "../company/COMPANY.js";
const CI = express.Router();


CI.post('/post', async (req, res) => {
    console.log('comapanyname')
    const data = new companies({
        Company_name: req.body.Company_name,
        Phone_number: req.body.Phone_number,
        Email:req.body.Email,
        Address:req.body.Address,   
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
CI.get('/getAll', async (req, res) => {
    try {
        const data = await CI.find();
        res.json(data);
      //  const risk = await Risk.findById(req.params.riskId).populate("Company")
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
CI.get('/getOne/:id', async (req, res) => {
    try {
        const data = await CI.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
CI.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await CI.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
CI.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await CI.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export default CI;