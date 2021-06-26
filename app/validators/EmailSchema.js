const Joi = require('@hapi/joi');

const EmailToSendSchema = {
  email_label: Joi.string().max(50).required(),
  email_to: Joi.string().email().required(),
};

module.exports = {
  EmailToSendSchema,
};
