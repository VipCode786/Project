import express from "express";
import mongoose from "mongoose";
import companies from "../company/COMPANY.js";
import User from "../user_Interface/USER.js";
//import currentDayNumber from "current-day-number";
import nodeCron from "node-cron"
const UI = express.Router();
//var currentDayNumber = require('current-day-number');


UI.post('/post', async (req, res,next) => {
    //const d =currentDayNumber('created_date');
    // const job = nodeCron.schedule("* 1 * * * *", () => {
    //     console.log(new Date().toLocaleString());
    //   });
    const search = req.body.Company_name;
    //const a = search.replace(/\s+/g,'')
    const b =await companies.find({Company_name:{$regex:search,$options:'i'}})
    console.log("b...........",b[0]._id.toString())

  
     console.log("B",b[0]["_id"].toString())
    // .then(data=>{
    //     res.send(data);
    // })
    const data = new User({
        User_name: req.body.User_name,
        Phone_number: req.body.Phone_number,
        Email:req.body.Email,
        Address:req.body.Address,
        Age:req.body.Age,
        Gender:req.body.Gender,    
        Company_name: req.body.Company_name,
        item: req.body.item,
        company:b[0]["_id"].toString(),
       // created_date:req.body.created_date
        count:req.body.count
    })

    
       
        if(b.length > 0) 
        {
    try{
        const dataToSave = await data.save();
        {res.status(200).json(dataToSave)}
    }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
        }

    
   else
   {
        res.status(404).json({ message: "ComaPNY  not found" })
    }}
)

//Get all Method
UI.get('/getAll', async (req, res) => {
    try {
        const data = await User.findById();
        res.json(data)
        //res.populate('Company_name');
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//Get by ID Method
UI.get('/getOne/:id', async (req, res) => {
//const id = (req.params.id).toString()
    try {
        const data = await User.findById(req.params.id).populate("company")
        res.json(data) 
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
UI.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await UI.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
UI.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await UI.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export default UI;
