const express = require('express');
const { blogPostsController } = require('../controller');

const { validateToken, validateNewBlogPost } = require('../middlewares');

const blogPostRouter = express.Router();

blogPostRouter.post('/', validateToken, validateNewBlogPost, blogPostsController.create);

module.exports = blogPostRouter;
