const Product = require("../database/models/productModel");

/**
 * This function can be reused
 * All the business logic will go in here
 *
 * Create a new Product document
 */
module.exports.createProduct = async (productServiceData) => {
  try {
    //console.log(serviceData);
    //Insert Data into db, pass data into new Product Model instance
    //Use spread operater because key and value are the same ...serviceData
    //Or name: serviceData.name, etc
    let product = new Product({ ...productServiceData });
    return await product.save(); //save is a promise so we must await
  } catch (error) {
    console.log("Mongoose Save Document Error: Service: createProduct ", error);
  }
};
