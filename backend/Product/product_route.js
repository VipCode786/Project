import express from 'express';
import Product from '../Product/product.js';
const product_route = express.Router();

//Post Method
product_route.post('/post', async (req, res,next) => {
   
    const data = new Product({
        Productname: req.body.Productname,
        MRP: req.body.MRP,
        Quantity: req.body.Quantity,
        Category: req.body.Category,
        LOW: req.body.LOW,
        HIGH:req.body.HIGH,
        Purchasing_details: req.body.Purchasing_details,
        Currency:req.body.Currency,
        Selling_Details: req.body.Selling_Details,
        Tax_Details: req.body.Tax_Details,
        
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
product_route.get('/getAll', async (req, res) => {
    try {
        const data = await Product.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
product_route.get('/getOne/:id', async (req, res) => {
    try {
        const data = await P.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//transfer from one to multiple
product_route.put('/transferPro', expressAsyncHandler(async (req, res) => {
    const products =await  Product.findById("6350e08b94caa6534830c2b9")
    // console.log(products)
    // const source= await products.findById("63512462630e0308d49ea1e7")
   const source= products.warehouseStock?.forEach((item)=>
   {
//    console.log(item)

     if (item.warehouse =="63512462630e0308d49ea1e7")
     {

        function transfer( id ,qty)
        {
         item.QTY=item.QTY-qty;
         
        
         products.warehouseStock?.forEach((i)=>
            { console.log("abhi",i)
             
               if (i.warehouse ==id){
                
                i.QTY=i.QTY+qty
                console.log(i.QTY) 
               }
               else{
                console.log("chlooo",i.warehouse)
               }

            } 
            )    
        
     }
       
        const destination =[{id:"63809e4f4e13bc37ec6055f4", QTY:10},{ id:"63512da8865e1a52f46af7dc",QTY:20}]
        for (let i=0;i<destination.length;i++)
{
    // console.log(i)
   destination[i];
  console.log("A",destination.length);
   transfer(destination[i].id, destination[i].QTY);


}
products.save()
     }
   }
   )

    // console.log(source)

}))

//Update by ID Method
product_route.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Product.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
product_route.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export default product_route;
