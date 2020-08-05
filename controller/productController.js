const productService = require("../service/productService");
const constants = require("../constants/index");

/**
 *
 * Goal : 1) Send the post request data to service 2) Send reponse to Client that requested the post
 *
 * Create Product function that has access to the request response object from router.POST
 * in product routes.
 *
 * try to log the request.body to console
 * try to pass the request body to service
 *
 */
module.exports.createProduct = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    //response.send("Testing the product was created successfully");
    //TODO: Try to get the request body
    //console.log("body", request.body);
    //TODO: Try to pass the request body data to the service and the service will interact with db
    const responseFromService = await productService.createProduct(req.body);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_CREATED_MESSAGE;
    response.body = responseFromService;
  } catch (error) {
    console.log("Something went wrong: Controller: createProduct: ", error);
    response.message = error.message;
  }

  //send the whole response object
  return res.status(response.status).send(response);
};

/**
 *
 * Goal : 1) Send the get request data to service 2) Send reponse to Client that requested the get
 *
 *
 */
module.exports.getAllProducts = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await productService.getAllProducts();
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_FETCHED_MESSAGE;
    response.body = responseFromService;
  } catch (error) {
    console.log("Something went wrong: Controller: getAllProducts: ", error);
    response.message = error.message;
  }

  //send the whole response object
  return res.status(response.status).send(response);
};
