import express from 'express';
import mongoose from 'mongoose';
import user_route  from  './route/USER/user_route.js';
import company_route from './route/company/company_route.js';
import supplier_route from './route/suppliers/supplier_route.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', user_route)
app.use('/api/company', company_route)
app.use('/api/supplier', supplier_route)
mongoose.connect("mongodb://localhost:27017/User" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  }).then(()=> console.log("MongoDb Connected ...........")).catch((error)=> console.error("MongoDB connection failed :", error.message));

app.get('/', (req, res) => {
    res.send('Server is ready');
  });
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
  });