const { validate } = require('express-validation');
const {
  getAllOrders,
  addOrder,
  getOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/order.controller');
const { AuthJwt: { verifyToken, isModeratorOrAdmin } } = require('../middlewares');
const { createOrderValidation, updateOrderValidation } = require('../validations');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/orders', [verifyToken], getAllOrders);
  app.get(
    '/api/orders/:id',
    [
      verifyToken,
    ],
    getOrder,
  );
  app.post(
    '/api/orders',
    [
      verifyToken,
      isModeratorOrAdmin,
      validate(createOrderValidation),
    ],
    addOrder,
  );
  app.put(
    '/api/orders/:id',
    [
      verifyToken,
      isModeratorOrAdmin,
      validate(updateOrderValidation),
    ],
    updateOrder,
  );
  app.delete(
    '/api/orders/:id',
    [
      verifyToken,
      isModeratorOrAdmin,
    ],
    deleteOrder,
  );
};
