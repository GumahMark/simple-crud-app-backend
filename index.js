const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.listen(3000, () => {
  console.log("Server is runing on port 3000");
});


// routes
app.use("/api/products", productRoute)


 app.get("/", (req, res) => {
  res.send(`<h1>Hello from Node API Server new last day to finish!</h1>`);
});

/*
//retrieve all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); */

//find product by id
app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//db connection
mongoose
  .connect(
    "mongodb+srv://mark:marknodejs@cluster0.binomxw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )

  .then(() => {
    console.log("connected to database!");
  })
  .catch(() => {
    console.log("Connection failed");
  });
