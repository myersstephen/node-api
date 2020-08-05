const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

/**
 * define a router
 * define the type of http method
 * Forwards the route handler to the product Controller - create product function
 */

router.post("/", productController.createProduct);
module.exports = router;
