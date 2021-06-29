const Joi = require('@hapi/joi');

const CreateNewBookingSchema = {
  user_id: Joi.number().min(0).required(),
  consultor_id: Joi.number().min(0).required(),
  start_at: Joi.string().email().required(),
  end_at: Joi.number(),
  timezone: Joi.string().required(),
};

module.exports = {
  CreateNewBookingSchema,
};
