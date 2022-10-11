import express from 'express';
import mongoose from 'mongoose';
import UI from '../backend/user_Interface/USER_Route.js';
import CI from '../backend/company/Company_route.js'


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', UI)
app.use('/api/companies',CI)


mongoose.connect("mongodb://localhost:27017/USER" , {
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