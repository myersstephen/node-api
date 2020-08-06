const Product = require("../database/models/productModel");
const { formatMongoData, checkObjectId } = require("../helper/dbHelper");
const constants = require("../constants/index");
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
    return formatMongoData(result);
  } catch (error) {
    console.log("Mongoose Save Document Error: Service: createProduct ", error);
  }
};

module.exports.getAllProducts = async ({ skip = 0, limit = 10 }) => {
  try {
    let allProducts = await Product.find({})
      .skip(parseInt(skip)) //skip value we get from query params are a string
      .limit(parseInt(limit)); //limit values are strings as well
    //if multiple documents we need to iterate over them all an apply toObject
    return formatMongoData(allProducts);
  } catch (error) {
    console.log(
      "Mongoose Find Document Error: Service: getAllProducts ",
      error
    );
  }
};

module.exports.getProductById = async ({ id }) => {
  try {
    let product = await Product.findById(id);
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log(
      "Mongoose Find Document Error: Service: getProductByID ",
      error
    );
  }
};

module.exports.updateProductById = async ({ id, updateInfo }) => {
  try {
    let product = await Product.findOneAndUpdate({ _id: id }, updateInfo, {
      new: true, //to get back the updated document
    });
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log(
      "Mongoose Find Document Error: Service: updateProductByID ",
      error
    );
  }
};

module.exports.deleteProductById = async ({ id }) => {
  try {
    let product = await Product.findByIdAndDelete(id);
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log(
      "Mongoose Find Document Error: Service: deleteProductByID ",
      error
    );
  }
};
