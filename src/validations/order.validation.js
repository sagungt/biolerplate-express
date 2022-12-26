const { Joi } = require('express-validation');

const createOrderValidation = {
  body: Joi.object({
    CustomerId: Joi.number().required(),
    ProductId: Joi.number().required(),
    orderDate: Joi.date().required(),
    status: Joi.string().required(),
  }),
};

const updateOrderValidation = {
  body: Joi.object({
    CustomerId: Joi.number().optional(),
    ProductId: Joi.number().optional(),
    orderDate: Joi.date().optional(),
    status: Joi.string().optional(),
  }),
};

module.exports = {
  createOrderValidation,
  updateOrderValidation,
};
