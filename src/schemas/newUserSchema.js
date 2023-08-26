const joi = require('joi');

const newUserSchema = joi.object({
  displayName: joi.string().min(8).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  image: joi.string(),
}).messages({
  'string.min': '{#label} length must be at least {#limit} characters long',
  'string.email': '{#label} must be a valid email',
  'string.empty': '{#label} length must be at least {#limit} characters long',
});

module.exports = newUserSchema;