const { blogPostSchema } = require('../schemas');

const validateNewBlogPost = (req, res, next) => {
  const post = req.body;
  const { error } = blogPostSchema.validate(post);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = validateNewBlogPost;