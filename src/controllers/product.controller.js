const db = require('../models');

const { Product } = db;

const getAllProducts = async (req, res) => {
  const products = await Product.findAll();

  return res.respond({
    message: 'success',
    data: products,
  }, 200);
};

const getProduct = async (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    return res.respond({
      message: 'invalid id',
      data: null,
    }, 400);
  }

  const product = await Product.findOne({
    where: { id },
  });

  if (product) {
    return res.respond({
      message: 'success',
      data: product,
    }, 200);
  }

  return res.respond({
    message: 'product not found',
    data: null,
  }, 404);
};

const addProduct = async (req, res) => {
  const product = await Product.create(req.body);

  return res.respond({
    message: 'success',
    data: product,
  }, 201);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    return res.respond({
      message: 'invalid id',
      data: null,
    }, 400);
  }

  const product = await Product.findOne({
    where: { id },
  });

  if (product) {
    await Product.update(req.body, {
      where: { id },
    });

    const updatedProduct = await Product.findOne({
      where: { id },
    });

    return res.respond({
      message: 'success',
      data: updatedProduct,
    }, 200);
  }

  return res.respond({
    message: 'product not found',
    data: null,
  }, 404);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    return res.respond({
      message: 'invalid id',
      data: null,
    }, 400);
  }

  const product = await Product.findOne({
    where: { id },
  });

  if (product) {
    await Product.destroy({
      where: { id },
    });

    return res.respond({
      message: 'success',
      data: null,
    }, 200);
  }

  return res.respond({
    message: 'product not found',
    data: null,
  }, 404);
};

module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
