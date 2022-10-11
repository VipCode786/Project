import express from 'express';
import Data from '../model/model.js';
//const Model = require('./model/model');
const routerdemo = express.Router();

//Post Method
routerdemo.post('/post', async (req, res) => {
    const data = new Data({
        name: req.body.name,
        age: req.body.age
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
routerdemo.get('/getAll', async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
routerdemo.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
routerdemo.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Data.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
routerdemo.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Data.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export default routerdemo;