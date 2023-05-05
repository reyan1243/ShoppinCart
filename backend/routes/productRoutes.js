const express = require("express")
const router = express.Router()
const {getAllProducts,getProductById} = require('../controller/productControllers')


// get all products from db
// access public ->everyone can see
router.get("/", getAllProducts)

// get a products by id from db
// access public ->everyone can see
router.get("/:id",getProductById)

module.exports = router
