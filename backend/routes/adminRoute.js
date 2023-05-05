const express = require("express");
const router = express.Router();
const orderPage = require("../controller/adminController");

router.post("/", orderPage);


module.exports = router;
