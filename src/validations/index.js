const { loginValidation, registerValidation } = require('./auth.validation');
const { createCustomerValidation, updateCustomerValidation } = require('./customer.validation');
const { createProductValidation, updateProductValidation } = require('./product.validation');
const { createOrderValidation, updateOrderValidation } = require('./order.validation');

module.exports = {
  loginValidation,
  registerValidation,
  createCustomerValidation,
  updateCustomerValidation,
  createProductValidation,
  updateProductValidation,
  createOrderValidation,
  updateOrderValidation,
};
