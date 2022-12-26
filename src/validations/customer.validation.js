const { Joi } = require('express-validation');

const createCustomerValidation = {
  body: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    gender: Joi.number().required(),
    dateOfBirth: Joi.date().required(),
    address: Joi.string().required(),
  }),
};

const updateCustomerValidation = {
  body: Joi.object({
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    email: Joi.string().email().optional(),
    phone: Joi.string().optional(),
    gender: Joi.number().optional(),
    dateOfBirth: Joi.date().optional(),
    address: Joi.string().optional(),
  }),
};

module.exports = {
  createCustomerValidation,
  updateCustomerValidation,
};
