const loginValidation = require('./loginValidation');
const newUserValidation = require('./newUserValidation');
const validateToken = require('./validateToken');
const newCategoryValidation = require('./newCategoryValidation');
const validateNewBlogPost = require('./validateNewBlogPost');

module.exports = {
  loginValidation,
  newUserValidation,
  validateToken,
  newCategoryValidation,
  validateNewBlogPost,
};
