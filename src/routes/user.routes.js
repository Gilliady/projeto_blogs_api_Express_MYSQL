const express = require('express');
const { userController } = require('../controller');
const { newUserValidation } = require('../middlewares');
const { validateToken } = require('../middlewares');

const userRouter = express.Router();

userRouter.get('/', validateToken, userController.getAll);
userRouter.get('/:id', validateToken, userController.getById);
userRouter.delete('/me', validateToken, userController.deleteMe);
userRouter.post('/', newUserValidation, userController.create);

module.exports = userRouter;