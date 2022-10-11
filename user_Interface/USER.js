import mongoose from 'mongoose';
const { Schema } = mongoose;
//import { Schema } from 'mongoose';
//import {nanoid} from 'nanoid';
//import mongooseUniqueValidator from "mongoose-unique-validator";
import cron from 'node-cron';

const dataSchema = new Schema({
    // _id : Number,
    User_name:{
        required: true,
        type: String

    },
    Phone_number: {
        required: true,
        min:10,
        //max:10,
        //background:true,
        type: Number
    },
    Email: {
        required: true,
        //unique: true,
        //background:true,
        type: String
    },
    Address:{
        required : true,
        type : String

    },
    Age:{
        required : true,
        type: Number
    },
    Gender:{
        required: true,
        type: String
    },
    Company_name:{
        type :String,
        required:true
    },
    item:
    {required: true,
     type: Number
    },

    company:{
        type : Schema.Types.ObjectId,
        ref :'companies',
        required: true,
    },
    created_date: {type:Date, default:Date.now, timezone:'+530' },
    count:{required:true,
        type:Boolean, 
        default:false,
    //    cron:'* * * * *'
    }
    
 },//{timestamps:{
//     updatedAt:false,
//     default:"Asia/Calcutta"
)
//dataSchema.plugin(mongooseUniqueValidator)
const User = mongoose.model('User', dataSchema)

export default User;
