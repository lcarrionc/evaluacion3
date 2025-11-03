const Joi = require('joi');

// Define the product validation schema
const productSchema = Joi.object({
  name: Joi.string().min(2).max(200).required(),
  description: Joi.string().allow('', null),
  price: Joi.number().precision(2).positive().required(),
  stock: Joi.number().integer().min(0).required()
});

// Function to validate product data
function validateProduct(data) {
  return productSchema.validate(data, { abortEarly: false });
}

module.exports = { validateProduct };
