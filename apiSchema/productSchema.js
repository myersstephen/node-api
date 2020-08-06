const Joi = require("joi");

module.exports.createProductSchema = Joi.object().keys({
  name: Joi.string().alphanum().min(3).max(30).required(),

  price: Joi.number().min(1).max(10000).required(),

  brand: Joi.string().min(2).max(30).required(),
});

//This schema is for the Query Params
module.exports.getAllProductsSchema = Joi.object().keys({
  skip: Joi.string(),
  limit: Joi.string(),
});

module.exports.getProductByIdSchema = Joi.object().keys({
  id: Joi.string().alphanum().min(24).max(24),
});
