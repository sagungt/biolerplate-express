const db = require('../models');

const { Customer } = db;

const getCustomer = async (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    return res.respond({
      message: 'invalid id',
      data: null,
    }, 400);
  }

  const customer = await Customer.findOne({
    where: { id },
  });

  if (customer) {
    return res.respond({
      message: 'success',
      data: customer,
    }, 200);
  }

  return res.respond({
    message: 'customer not found',
    data: null,
  }, 404);
};

const getAllCustomers = async (req, res) => {
  const customers = await Customer.findAll();

  return res.respond({
    message: 'success',
    data: customers,
  }, 201);
};

const addCustomer = async (req, res) => {
  const customer = await Customer.create(req.body);

  return res.respond({
    message: 'success',
    data: customer,
  }, 400);
};

const updateCustomer = async (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    return res.respond({
      message: 'invalid id',
      data: null,
    }, 400);
  }

  const customer = await Customer.findOne({
    where: { id },
  });

  if (customer) {
    await Customer.update(req.body, {
      where: { id },
    });

    const updatedCustomer = await Customer.findOne({
      where: { id },
    });

    return res.respond({
      message: 'success',
      data: updatedCustomer,
    }, 200);
  }

  return res.respond({
    message: 'customer not found',
    data: null,
  }, 404);
};

const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    return res.respond({
      message: 'invalid id',
      data: null,
    }, 400);
  }

  const customer = await Customer.findOne({
    where: { id },
  });

  if (customer) {
    await Customer.destroy({
      where: { id },
    });

    return res.respond({
      message: 'success',
      data: null,
    }, 200);
  }

  return res.respond({
    message: 'customer not found',
    data: null,
  }, 404);
};

module.exports = {
  getAllCustomers,
  getCustomer,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
