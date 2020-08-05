const Product = require("../database/models/productModel");

/**
 * This function can be reused
 * All the business logic will go in here
 *
 * Create a new Product document
 */
module.exports.createProduct = async (productServiceData) => {
  try {
    let product = new Product({ ...productServiceData });
    let result = await product.save();
    //to Object method converts document to a Object - applied on single instance
    //doesnt affect data in db
    //if multiple documents we need to iterate over them all an apply toObject
    return result.toObject();
  } catch (error) {
    console.log("Mongoose Save Document Error: Service: createProduct ", error);
  }
};
