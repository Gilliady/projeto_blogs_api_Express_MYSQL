const { newCategorySchema } = require('../schemas');

const newCategoryValidation = (req, res, next) => {
  const { error } = newCategorySchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

module.exports = newCategoryValidation;