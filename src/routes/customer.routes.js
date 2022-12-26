const { validate } = require('express-validation');
const {
  getAllCustomers,
  getCustomer,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customer.controller');
const { AuthJwt: { verifyToken, isModeratorOrAdmin } } = require('../middlewares');
const { createCustomerValidation, updateCustomerValidation } = require('../validations');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/customers', [verifyToken], getAllCustomers);
  app.get(
    '/api/customers/:id',
    [
      verifyToken,
    ],
    getCustomer,
  );
  app.post(
    '/api/customers',
    [
      verifyToken,
      isModeratorOrAdmin,
      validate(createCustomerValidation),
    ],
    addCustomer,
  );
  app.put(
    '/api/customers/:id',
    [
      verifyToken,
      isModeratorOrAdmin,
      validate(updateCustomerValidation),
    ],
    updateCustomer,
  );
  app.delete(
    '/api/customers/:id',
    [
      verifyToken,
      isModeratorOrAdmin,
    ],
    deleteCustomer,
  );
};
