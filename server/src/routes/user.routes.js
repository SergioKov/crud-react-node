const { Router } = require('express');
const controller = require('../controllers/user.controller');

const userRoutes = Router();

userRoutes.post('/', controller.createUser);

module.exports = userRoutes;
