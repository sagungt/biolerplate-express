const { Joi } = require('express-validation');

const createProductValidation = {
  body: Joi.object({
    name: Joi.string().required(),
    uom: Joi.string().required(),
    stock: Joi.number().required(),
    price: Joi.number().required(),
  }),
};

const updateProductValidation = {
  body: Joi.object({
    name: Joi.string().optional(),
    uom: Joi.string().optional(),
    stock: Joi.number().optional(),
    price: Joi.number().optional(),
  }),
};

module.exports = {
  createProductValidation,
  updateProductValidation,
};
