const express = require('express');
const { categoryController } = require('../controller');
const { validateToken, newCategoryValidation } = require('../middlewares');

const categoryRouter = express.Router();

categoryRouter.get('/', validateToken, categoryController.getAll);
categoryRouter.post('/', validateToken, newCategoryValidation, categoryController.create);

module.exports = categoryRouter;