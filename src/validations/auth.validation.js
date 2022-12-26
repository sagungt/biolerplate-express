const { Joi } = require('express-validation');

const loginValidation = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const registerValidation = {
  body: Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().min(5).required(),
    password: Joi.string().min(8).required(),
    roles: Joi.array().items(Joi.string()).optional(),
  }),
};

module.exports = {
  loginValidation,
  registerValidation,
};
