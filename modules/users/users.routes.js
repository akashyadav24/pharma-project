const userRoutes = require('express').Router();
const {
  loginUserController,
  createNewUserController,
} = require('./users.controller');

const isAuthenticated = require('../../middllewares/isAuthenticated');


userRoutes.post('/users/login', loginUserController);
userRoutes.post('/users/signup', createNewUserController);

module.exports = userRoutes;
