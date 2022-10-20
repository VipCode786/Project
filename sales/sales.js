import mongoose from "mongoose";
import mongoosesequence   from 'mongoose-sequence';
import testing from "./testing.js";
//const AutoIncrement   = mongoosesequence(mongoose);
//const AutoIncrement = require('mongoose-sequence')(mongoose);
//import testing from '../sales/testing';
// var validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };

const supplierSchema = new mongoose.Schema({
    id: { type: String},
    Name: { type: String, 
        required: true ,
       match:[/[0-9a-zA-Z].*[0-9a-zA-Z]$/, 'Please fill a valid email address']
        // match: /^[^$]+$/,
        // validate: [
        //     {
        //         validator(value) {
        //             return !value.includes("$")
        //         },
        //         message: "city must not include a dollarsign"
        //     }]
    },

    Email: { type: String, required: true,
        //validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
            
            },
        //unique: true},


     Phone: {
        type: String,
        required: true,
        //unique: true
     },

    //  count:{
    //     require:true
    //  },

    //  id1:{
    //     required:true,
    //  },
    //  seq:{
    //     type:Number
    //  },

    BillingAddress :{//
        billingAddress: {type: String, required: true },
        City: {type: String, required: true },
        State: {type: String, required: true },
        Country: {type: String, required: true },
        Pincode : {type: String, required: true }
        },



    ShippingAddress : {
        shippingAddress: {type: String, required: true },
        City: {type: String, required: true },
        State: {type: String, required: true },
        Country: {type: String, required: true },
        Pincode : {type: String, required: true }
    },
    disabled:{
        type:Boolean,
        default:false
    }
   
})

//supplierSchema.plugin(AutoIncrement,{inc_field:('id'),prefix:'SUP0_'})
//console.log(b)

supplierSchema.pre("save", function (next) {
    let doc = this;
    testing.getSequenceNextValue("Supplier_id").
    then(counter => {
        console.log("asdasd", counter);
        if(!counter) {
            testing.insertCounter("Supplier_id")
            .then(counter => {
                console.log(doc)
                doc.id =`SUP${counter}`;
                
                console.log(doc.id)
                next();
            })
            .catch(error => next(error))
        } else {
            doc.id = `SUP${counter}`;
            next();
        }
    })
    .catch(error => next(error))
});

const Supplier = mongoose.model('Supplier', supplierSchema);
export default Supplier
