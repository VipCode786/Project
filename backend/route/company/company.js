import mongoose from "mongoose"
//import { nanoid } from 'nanoid';
const dataSchema = new mongoose.Schema({
    // uniqueid: {

      //  default: () => nanoid(5),
        //type: String
      //},
     companyname: {
        required: true,
        unique:true,
        background:true,
        uppercase:true,
        type: String,

    },
     companyphone: {
        required: true,
        type: Number
    },
     companyemail: {
            required: true,
            type: String
     },
     companyaddress: {
         required: true,
         type: String
    },

},
   // {timeStamps: true}
    )




const companies = mongoose.model('companies', dataSchema)

export default companies;