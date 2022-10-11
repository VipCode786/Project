import mongoose from "mongoose"
import { nanoid } from 'nanoid';
const dataSchema = new mongoose.Schema({
    uniqueid: {
        
        default: () => nanoid(5),
        type: String
      },
     Productname: {
        required: true,
        type: String
        
    },
     MRP: {
        required: true,
        type: Number
    },
     Quantity: {
            required: true,
            type: Number
     },
     Category: {
         required: true,
         type: String
    },
     LOW: {
         required: true,
         type: Number
     },
     HIGH:{
        required: true,
        type: Number
    },
    Purchasing_details: {
        required: true,
        type: String
    },
    Currency: {
        required: true,
        type: Number
    },
    Selling_Details: {
        required: true,
        type: Number
    },
    Tax_Details: {
        required: true,
        type: Number
    },
},    
    {timeStamps: true})




const Product = mongoose.model('Product', dataSchema)

export default Product;