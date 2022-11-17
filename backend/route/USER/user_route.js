import express from 'express';
import companies from  '../company/company.js'
import User from '../USER/user.js';
const user_route = express.Router();
//Post Method
user_route.post('/post', async (req, res,next) => {

    const searchedField = req.body.companyname;
     //const abc=searchedField.replace(/\s+/g, '');
     const b =await companies.find({companyname:{$regex:searchedField, $options:'i'}})
     console.log ("b...............",b[0]._id.toString())


    console.log("B",b[0]["_id"].toString())

     //.then(data1=>{
       // res.send(data1);

      const data = new User({
         username: req.body.username,
         userage: req.body.userage,
         userphone: req.body. userphone,
         useraddress: req.body.useraddress,
         userGender:req.body.userGender,
         useremail:req.body.useremail,
         companyname:req.body.companyname,
         company:b[0]["_id"].toString()
         //item:req.body.item
         
      })
       if(b.length > 0)
       {
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
            }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
       }
   else
  { res.status(404).json({ message:"company not found" })
}}


)
//Get all Method
user_route.get('/getAll', async (req, res) => {
    try {

        const data = await User.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
user_route.get('/getOne/:id', async (req, res) => {
  //  User.find()
  //  .populate ('company', 'companyname')
  //  .exec()
    try {
        const data = await User.findById(req.params.id).populate("company")
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
user_route.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
user_route.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export default user_route;