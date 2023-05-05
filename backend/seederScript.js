require("dotenv").config;

const db = require("./dataBase");
const productsdata = require("./data/products");
const Product = require("./models/Product");

db.then(() => console.log("database connected"));
const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsdata);
    console.log("import sucess");
    process.exit;
  } catch (error) {
    console.log(err);
    process.exit(1);
  }
};

importData();
