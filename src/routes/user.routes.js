const express = require('express');
const { userController } = require('../controller');
const { newUserValidation } = require('../middlewares');
const { validateToken } = require('../middlewares');

const userRouter = express.Router();

userRouter.get('/', validateToken, userController.getAll);

userRouter.post('/', newUserValidation, userController.create);

module.exports = userRouter;