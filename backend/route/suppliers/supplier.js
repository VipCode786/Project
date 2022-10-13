import mongoose from "mongoose";
import sequencing from "../suppliers/sequencing.js";
import mongooseSequence from "mongoose-sequence";
//const  autoIncrement = mongooseSequence(mongoose);
const supplierSchema = new mongoose.Schema({
_id:{type:String,required:true},
 Name: { type: String, required: true },
 Email: { type: String, required: true,
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
