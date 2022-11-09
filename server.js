import express from 'express';
import mongoose from 'mongoose';
import UI from '../backend/user_Interface/USER_Route.js';
import CI from '../backend/company/Company_route.js'
import SR from '../backend/sales/sales_route.js'
import PR from '../backend/product/product_route.js';
import WI from '../backend/warehouse/ware_route.js';
import AI from '../backend/transaction/transa.js'
import LI from '../backend/date.js';
//import cron from "node-cron"


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', UI)
app.use('/api/companies',CI)
app.use('/api/Sale',SR)
app.use('/api/product',PR)
app.use('/api/Warehouse',WI)
app.use('/api/tran',AI)
app.use('/api/date',LI)




mongoose.connect("mongodb://localhost:27017/USER" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  }).then(()=> console.log("MongoDb Connected ...........")).catch((error)=> console.error("MongoDB connection failed :", error.message));
//var t = true
// var g = cron.schedule("* * * * * *",() =>{
//   g.update()
// })


app.get('/', (req, res) => {
    res.send('Server is ready');
  });
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
  });
