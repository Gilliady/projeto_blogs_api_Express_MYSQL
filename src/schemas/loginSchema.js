const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().required().min(1),
  password: joi.string().required().min(1),
}).messages({
  'string.empty': 'Some required fields are missing',
  'any.required': 'Some required fields are missing',
});

module.exports = loginSchema;
