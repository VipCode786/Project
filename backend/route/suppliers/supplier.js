import mongoose from "mongoose";
import sequencing from "../suppliers/sequencing.js";
import mongooseSequence from "mongoose-sequence";
//const  autoIncrement = mongooseSequence(mongoose);
const supplierSchema = new mongoose.Schema({
id:{type:String},
 Name: { type: String, required: true,match: [/[0-9a-zA-Z].*[0-9a-zA-Z]$/, 'Please fill a valid name']},//pattern: "/[\.]/g,'", trim : true},
 Email: { type: String, required: true,match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
     //unique: true
},

 Phone: {
     type: String,
      required: true,
      //unique: true
 },
//  id:
// {
//     type: String
// },
disabled: { type: Boolean, default: false},
// enable:{ type: Boolean, default:false},
 BillingAddress :
 {

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


})

 //supplierSchema.plugin(autoIncrement)
 supplierSchema.pre("save", function (next) {
    let doc = this;
    sequencing.getSequenceNextValue("supplier_id").
    then(counter => {
        console.log("asdasd", counter);
        if(!counter) {
            sequencing.insertCounter("supplier_id")
            .then(counter => {
                doc.id =`Sup${counter}`;
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

const Supplier = mongoose.model('supplier', supplierSchema);
export default Supplier;
