const { Router } = require('express');
const controller = require('../controllers/user.controller');

const userRoutes = Router();

//Leer un usuario
userRoutes.get('/', controller.getAllUsers);

//Leer un usuario por id
userRoutes.get('/:id', controller.getUserById);
userRoutes.get('/userByEmail/:email', controller.getUserByEmail);
userRoutes.get('/userByEmailAndUsername/:email/:username', controller.getUserByEmailAndUsername);

userRoutes.put('/:id', controller.updateUser);

userRoutes.delete('/:id', controller.deleteUser);

//Crear un usuario
userRoutes.post('/', controller.createUser);

module.exports = userRoutes;
