const joi = require('joi');

const newCategorySchema = joi.object({
  name: joi.string().required(),
}).messages({
  'string.required': '{#label} is required',
});

module.exports = newCategorySchema;