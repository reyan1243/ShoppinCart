require("dotenv").config();
const express = require("express");
const db = require("./dataBase");
const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes")
const adminRoute = require("./routes/adminRoute");
// const router = require("./routes");
const cors = require("cors");

const PORT = process.env.PORT || 5500;

// start an express server
const app = express();

app.use(cors("*"));

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello from Express Js");
});

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/admin", adminRoute);

// app.use(router);

const start = () => {
  try {
    // database (mongo altas) connection check
    db.then(() => {
      console.log("database connected");
    });
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
