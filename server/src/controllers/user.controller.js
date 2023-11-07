const { log } = require('console');
const UserModel = require('../schemes/user.scheme');
const bcrypt = require('bcrypt');

const controller = {};

controller.getAllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find({
            //username: {
            //    $in: ['user1', 'Sergio'],
            //},
            email: {
                $in: ['ana@gmail.com', 'john@gmail.com'], //solo funciona con 1 parametro
            },
        });
        console.log('allUsers: ', allUsers);

        res.status(200).send(allUsers);
    } catch (err) {
        console.log('Error: ', err);
    }

    res.end();
};

controller.getUserById = async (req, res) => {
    try {
        const allUsers = await UserModel.findById(req.params.id);
        console.log('allUsers: ', allUsers);

        res.status(200).send(allUsers);
    } catch (err) {
        console.log('Error: ', err);
    }

    res.end();
};

controller.getUserByEmail = async (req, res) => {
    try {
        const allUsers = await UserModel.find({
            email: req.params.email,
        });
        console.log('controller.getUserByEmail --- allUsers: ', allUsers);

        res.status(200).send(allUsers);
    } catch (err) {
        console.log('Error: ', err);
    }

    res.end();
};

controller.getUserByEmailAndUsername = async (req, res) => {
    try {
        const allUsers = await UserModel.find({
            $or: [{ email: req.params.email }, { username: req.params.username }],
        });
        console.log('controller.getUserByEmail --- allUsers: ', allUsers);

        res.status(200).send(allUsers);
    } catch (err) {
        console.log('Error: ', err);
    }

    res.end();
};

controller.createUser = async (req, res) => {
    const { username, password, email } = req.body;

    //Generar un hash de la contraseña
    const saltRounds = 10; // numero de rondas de sal para la encriptacion
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new UserModel({
        username,
        password: hashedPassword,
        email,
    });

    try {
        await newUser.save();
        console.log('Usuario creado con éxito.');
        res.status(201).send(`Usuario ${newUser.username} está creado con éxito en 'test.mi_colleccion' `);
    } catch (err) {
        if (err.code == 11000) {
            console.log('Error: ', err);
            res.status(409).send({ error: 'Email exists' });
        }
    }

    res.end();
};

controller.updateUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        console.log('user: ', user);

        if (!user) {
            return res.status(409).send('User not exist');
        }

        //modo 1
        //await UserModel.updateOne({ _id: user.id }, { $set: { username: 'asfaf' } });// funciona

        //modo 2
        await UserModel.findByIdAndUpdate(req.params.id, { username: 'newUserName' }); //funciona

        const allUsers = await UserModel.find();
        console.log('allUsers: ', allUsers);
        res.status(200).send(allUsers);
    } catch (error) {
        console.log('Error: ', error);
    }
};

controller.deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        console.log('user: ', user);

        if (!user) {
            return res.status(409).send('User not exist');
        }

        await UserModel.findByIdAndDelete(req.params.id); //funciona

        const allUsers = await UserModel.find();
        console.log('allUsers: ', allUsers);
        res.status(200).send(allUsers);
    } catch (error) {
        console.log('Error: ', error);
    }
};

module.exports = controller;
