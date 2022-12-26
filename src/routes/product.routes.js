const { validate } = require('express-validation');
const {
  getAllProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');
const { AuthJwt: { verifyToken, isModeratorOrAdmin } } = require('../middlewares');
const { createProductValidation, updateProductValidation } = require('../validations');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/api/products', [verifyToken], getAllProducts);
  app.get(
    '/api/products/:id',
    [
      verifyToken,
    ],
    getProduct,
  );
  app.post(
    '/api/products',
    [
      verifyToken,
      isModeratorOrAdmin,
      validate(createProductValidation),
    ],
    addProduct,
  );
  app.put(
    '/api/products/:id',
    [
      verifyToken,
      isModeratorOrAdmin,
      validate(updateProductValidation),
    ],
    updateProduct,
  );
  app.delete(
    '/api/products/:id',
    [
      verifyToken,
      isModeratorOrAdmin,
    ],
    deleteProduct,
  );
};
