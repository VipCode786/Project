import { mongoose } from 'mongoose';
import {nanoid} from 'nanoid';

const dataSchema = new mongoose.Schema({
    Product_name: randomBytes(8).toString('hex'),
    uniqueID:{
        required: true,
        type: Number,
        default: () => nanoid(3),
        index: {unique :true}
    },
    MRP: {
        required: true,
        type: Number
    },
    QTY: {
        required: true,
        type: Number
    },
    CATEGORY:{
        required : true,
        type : String

    },
    LOW:{
        required : true,
        type: Number
    },
    //NOEMAL:{
      //  required: true,
        //type: Number
    //},
    HIGH:{
        required: true,
        type: Number
    },
    Purchasing_detail:{
        required: true,
        type:String
    },
    Cost_price:{
        required : true,
        type: Number
    },
    Selling_price:{
        required:true,
        type: Number
    },
    Tax_details:{
        required:true,
        type: Number
    }

})

const Product = mongoose.model('Product', dataSchema)

export default Product;