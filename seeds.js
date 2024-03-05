const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1/shop_db")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const seedProducts = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 1000,
    color: "Black",
    category: "Electronics",
  },
  {
    name: "Kemeja Flanel",
    brand: "Erigo",
    price: 800,
    color: "White",
    category: "Clothing",
  },
  {
    name: "Laskar Pelangi",
    brand: "Tere Liye",
    price: 600,
    color: "Blue",
    category: "Books",
  },

  {
    name: "Samsung Galaxy S21",
    brand: "Samsung",
    price: 1200,
    color: "Silver",
    category: "Electronics",
  },
  {
    name: "Celana Jeans",
    brand: "Levi's",
    price: 700,
    color: "Blue",
    category: "Clothing",
  },
  {
    name: "Harry Potter",
    brand: "J.K. Rowling",
    price: 500,
    color: "Yellow",
    category: "Books",
  },
  {
    name: "Macbook Pro",
    brand: "Apple",
    price: 2500,
    color: "Gray",
    category: "Electronics",
  },
  {
    name: "Jaket Kulit",
    brand: "Zara",
    price: 900,
    color: "Black",
    category: "Clothing",
  },
  {
    name: "The Hobbit",
    brand: "J.R.R. Tolkien",
    price: 400,
    color: "Green",
    category: "Books",
  },
  {
    name: "Iphone 13",
    brand: "Apple",
    price: 1300,
    color: "Blue",
    category: "Electronics",
  },
  {
    name: "Kaos Polos",
    brand: "Uniqlo",
    price: 200,
    color: "White",
    category: "Clothing",
  },
  {
    name: "To Kill a Mockingbird",
    brand: "Harper Lee",
    price: 300,
    color: "Red",
    category: "Books",
  },
  {
    name: "iPad Pro",
    brand: "Apple",
    price: 1100,
    color: "Silver",
    category: "Electronics",
  },
];
Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => console.log(e));
