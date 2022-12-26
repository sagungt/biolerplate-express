const db = require('../models');

const { Order, Customer, Product } = db;

const getAllOrders = async (req, res) => {
  const orders = await Order.findAll({
    include: [
      { model: Customer, as: Customer.modelName },
      { model: Product, as: Product.modelName },
    ],
    attributes: { exclude: ['CustomerId', 'ProductId'] },
  });

  return res.respond({
    message: 'success',
    data: orders,
  }, 200);
};

const getOrder = async (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    return res.respond({
      message: 'invalid id',
      data: null,
    }, 400);
  }

  const order = await Order.findOne({
    where: { id },
    include: [
      { model: Customer, as: Customer.modelName },
      { model: Product, as: Product.modelName },
    ],
    attributes: { exclude: ['CustomerId', 'ProductId'] },
  });

  if (order) {
    return res.respond({
      message: 'success',
      data: order,
    }, 200);
  }

  return res.respond({
    message: 'order not found',
    data: null,
  }, 404);
};

const addOrder = async (req, res) => {
  const { customerId, productId } = req.body;

  if (!Number(customerId) || !Number(productId)) {
    return res.respond({
      message: 'invalid id',
      data: null,
    }, 400);
  }

  const customer = await Customer.findOne({
    where: { id: customerId },
  });

  if (!customer) {
    return res.respond({
      message: 'customer not found',
      data: null,
    }, 404);
  }

  const product = await Product.findOne({
    where: { id: productId },
  });

  if (!product) {
    return res.respond({
      message: 'product not found',
      data: null,
    }, 404);
  }

  const order = await Order.create(req.body);

  return res.respond({
    message: 'success',
    data: order,
  }, 201);
};

const updateOrder = async (req, res) => {
  const { id, customerId, productId } = req.params;

  if (!Number(id)) {
    return res.respond({
      message: 'invalid id',
      data: null,
    }, 400);
  }

  if (customerId) {
    if (!Number(customerId)) {
      return res.respond({
        message: 'invalid customer id',
        data: null,
      }, 400);
    }

    const customer = await Customer.findOne({
      where: { id: customerId },
    });

    if (!customer) {
      return res.respond({
        message: 'customer not found',
        data: null,
      }, 404);
    }
  }

  if (productId) {
    if (!Number(productId)) {
      return res.respond({
        message: 'invalid product id',
        data: null,
      }, 400);
    }
    const product = await Product.findOne({
      where: { id: productId },
    });
    if (!product) {
      return res.respond({
        message: 'product not found',
        data: null,
      }, 404);
    }
  }

  const order = await Order.findOne({
    where: { id },
  });

  if (order) {
    await Order.update(req.body, {
      where: { id },
    });

    const updatedOrder = await Order.findOne({
      where: { id },
    });

    return res.respond({
      message: 'success',
      data: updatedOrder,
    }, 200);
  }

  return res.respond({
    message: 'order not found',
    data: null,
  }, 404);
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    return res.respond({
      message: 'invalid id',
      data: null,
    }, 400);
  }

  const order = await Order.findOne({
    where: { id },
  });

  if (order) {
    await Order.destroy({
      where: { id },
    });

    return res.respond({
      message: 'success',
      data: null,
    }, 200);
  }

  return res.respond({
    message: 'order not found',
    data: null,
  }, 404);
};

module.exports = {
  getAllOrders,
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
};
