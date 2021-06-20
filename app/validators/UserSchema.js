const Joi = require('@hapi/joi');

const CreateNewUserSchema = {
  name: Joi.string().max(50).required(),
  email: Joi.string().email().required(),
  phone_number: Joi.number(),
  password: Joi.string().required(),
  role_id: Joi.number().max(3).required(),
  country_id: Joi.number().max(195).required(),
  payment_method_id: Joi.number(),
};

const UpdateUserSchema = {
  name: Joi.string().max(50).required(),
  email: Joi.string().email().required(),
  phone_number: Joi.number(),
  password: Joi.string().required(),
  role_id: Joi.number().max(3).required(),
  country_id: Joi.number().max(195).required(),
  payment_method_id: Joi.number(),
};

module.exports = {
  CreateNewUserSchema,
  UpdateUserSchema,
};
