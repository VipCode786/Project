import { isObjectIdOrHexString, mongoose, Schema } from 'mongoose';


const dataSchema = new mongoose.Schema({
    //_id : Number,
    Company_name:{
        required:true,
        // unique:true,
        // background: true,
        uppercase: true,
        type:String
        },
    // uniqueID:{
    //     required: true,
    //     type: String,
    //     default: () => nanoid(3),
    //     index: {unique :true}
    // },
    Phone_number: {
        required: true,
        type: Number
    },
    Email: {
        required: true,
        type: String
    },
    Address:{
        required : true,
        type : String

    }
})

const companies = mongoose.model('companies', dataSchema)

export default companies;