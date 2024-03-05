const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();

//models
const Product = require("./models/product");

//connect mongodb
mongoose
  .connect("mongodb://127.0.0.1/shop_db")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/products", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render("products/index", { products, category });
  } else {
    const products = await Product.find({});
    res.render("products/index", { products, category: "All" });
  }
});

app.get("/products/create", (req, res) => {
  res.render("products/create");
});

app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product
    .save()
    .then(() => {
      res.redirect("/products");
    })
    .catch((e) => console.log(e));
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id)
    .then((product) => {
      res.render("products/show", { product });
    })
    .catch((e) => console.log(e));
});

app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id)
    .then((product) => {
      res.render("products/edit", { product });
    })
    .catch((e) => console.log(e));
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  }).catch((e) => console.log(e));

  res.redirect(`/products/${product._id}`);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/products");
    })
    .catch((e) => console.log(e));
});

app.listen(3000, () => {
  console.log("Server is running on http://127.0.0.1:3000");
});
