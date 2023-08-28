const joi = require('joi');

const blogPostSchema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.array().items(joi.number()).required(),
}).messages({
  'string.empty': 'Some required fields are missing',
  'any.required': 'Some required fields are missing',
});

module.exports = blogPostSchema;