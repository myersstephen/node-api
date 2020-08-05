const constants = require("../constants/index");
//substack middleware
const validateObjectSchema = (data, schema) => {
  const result = schema.validate(data, { convert: false });
  if (result.error) {
    const errorDetails = result.error.details.map((val) => {
      return {
        error: val.message,
        path: val.path,
      };
    });
    return errorDetails;
  }
  return null;
  //console.log("Joi schema validation result: ", errorDetails);
};
module.exports.validateBody = (schema) => {
  return (req, res, next) => {
    let response = { ...constants.defaultServerResponse };
    const checkError = validateObjectSchema(req.body, schema);
    if (checkError) {
      response.body = checkError;
      response.message = constants.requestValidationMessage.BAD_REQUEST;
      //send our response from the middleware back to the client
      return res.status(response.status).send(response);
    }
    return next(); //create product controller
  };
};
