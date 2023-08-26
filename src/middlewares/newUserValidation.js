const { newUserSchema } = require('../schemas');

const validateNewUser = async (req, res, next) => {
  const { error } = newUserSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

module.exports = validateNewUser;