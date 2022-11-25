//import { nanoid } from 'nanoid';
//import mongooseUniqueValidator from "mongoose-unique-validator";
//import  mongoose, { Schema } from 'mongoose';
import mongoose from "mongoose";
const { Schema } = mongoose;

const dataSchema = new mongoose.Schema({
    //uniqueid: {

      //  default: () => nanoid(5),
        //type: String
     // },
     username: {
        required: true,
         type: String

    },
     userphone: {
        required: true,
        type: Number
    },
     useremail: {
            required: true,
            unique:true,

            type: String
     },
     useraddress: {
         required: true,
         type: String
    },
     userage: {
         required: true,
         type: Number
     },
     userGender:{
        required: true,
        type: String
    },
    companyname: {
        //required:true,
        type: String

    },
    //item: {required: true,
      //  type: String

   // }
   company:{
    type: Schema.Types.ObjectId,
    ref :'companies',
    required : true,
   },
   created: {type:Date , default:Date.now}

}
  // {timeStamps: true}
)



//dataSchema.plugin(mongooseUniqueValidator)
const User = mongoose.model('user', dataSchema)

export default User;