const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const productSchema = require("../apiSchema/productSchema");

/**
 * define a router
 * define the type of http method
 * Forwards the route handler to the product Controller - create product function
 *
 * Note we will validate the request payload from the router middleware before
 * we send it to the controller.
 *
 * No need to send to controller if request payload not valid
 */

router.post(
  "/",
  joiSchemaValidation.validateBody(productSchema.createProductSchema),
  productController.createProduct
);
module.exports = router;
