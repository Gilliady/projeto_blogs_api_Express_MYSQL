const express = require('express');
const { blogPostsController } = require('../controller');

const { validateToken, validateNewBlogPost } = require('../middlewares');

const blogPostRouter = express.Router();
blogPostRouter.get('/', validateToken, blogPostsController.getAll);
blogPostRouter.get('/:id', validateToken, blogPostsController.getById);
blogPostRouter.post('/', validateToken, validateNewBlogPost, blogPostsController.create);

module.exports = blogPostRouter;
