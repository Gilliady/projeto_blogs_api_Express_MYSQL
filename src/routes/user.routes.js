const express = require('express');
const { userController } = require('../controller');
const { newUserValidation } = require('../middlewares');

const userRouter = express.Router();

userRouter.post('/', newUserValidation, userController.create);

module.exports = userRouter;