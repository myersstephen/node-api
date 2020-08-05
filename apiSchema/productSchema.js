const Joi = require("joi");

module.exports.createProductSchema = Joi.object().keys({
  name: Joi.string().alphanum().min(3).max(30).required(),

  price: Joi.number().min(1).max(10000).required(),

  brand: Joi.string().min(2).max(30).required(),
});
