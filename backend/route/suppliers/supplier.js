import mongoose from "mongoose";
const supplierSchema = new mongoose.Schema({

 Name: { type: String, required: true },
 Email: { type: String, required: true,
     //unique: true
},

 Phone: {
     type: String,
      required: true,
      //unique: true
 },

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

 }

})
const Supplier = mongoose.model('supplier', supplierSchema);
export default Supplier;