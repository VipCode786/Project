import express from 'express';
import mongoose from 'mongoose';



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



mongoose.connect("mongodb://localhost:27017" , {
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