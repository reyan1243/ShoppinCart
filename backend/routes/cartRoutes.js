const express = require("express");
const router = express.Router();
const { getCart, createCart } = require("../controller/cartControllers");

// get all products from db
// access public ->everyone can see
router.get("/", getCart);

// get a products by id from db
// access public ->everyone can see
router.post("/createCart", createCart);

module.exports = router;
