const express = require("express");
const cors = require("cors")
const User = require("./db/User")
const Product = require("./db/Product")
const app = express();
 require('./db/config')

 app.use(express.json());
 app.use(cors());

 app.post("/register", async (req, resp)=>{
    let userData = new User(req.body)
    let result = await userData.save();
    result = result.toObject();
    delete result.password
    resp.send(result)
    //   resp.send(req.body)
    //  resp.send("API in progress")
 });

 app.post("/login", async (req, resp)=> {
  if(req.body.email && req.body.password){
    let user = await User.findOne(req.body).select("-password")
    if(user){
      resp.send(user)
    }else{
      resp.send({result : 'No user found'})
    }
  }else{
    resp.send({result : 'No user found'})
  }
});


app.post("/add-product", async (req, resp)=>{
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result)
});


app.get("/products", async (req, resp)=>{
  let products = await Product.find();
  if(products.length > 0){
    resp.send(products)
  }
});


app.delete("/product/:id", async(req, resp)=>{
  const result = await Product.deleteOne({_id:req.params.id})
  resp.send(result)
});

// API to get single product
app.get("/product/:id", async (req, resp)=>{
  let result = await Product.findOne({_id: req.params.id});
  if(result){
    resp.send(result)
  }else{
    resp.send({result: "No record found"})
  }
});


// API to Update product
app.put("/product/:id", async (req, resp)=>{
  let result = await Product.updateOne({_id: req.params.id},
    {
      $set : req.body
    }
  )
    resp.send(result)
});

app.listen(5000);







// const mongoose = require("mongoose")

// const connectDB = async ()=>{
//     mongoose.connect('mongodb://localhost:27017/inotebook')
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model('users', productSchema)
//     const data = await product.find();
//     console.log(data);
// }

// connectDB();

// app.listen(5000);