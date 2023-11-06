const UserModel = require('../schemes/user.scheme');

const controller = {};

controller.createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const newUser = new UserModel({
            username,
            password,
            email,
        });

        newUser.save();
        console.log('Usuario creado con éxito.');

        res.send(`Usuario ${newUser.username} está creado con éxito en 'test.mi_colleccion' `);
    } catch (err) {
        res.send({ error: err });
    }

    res.end();
};

// controller.updateUser = async (req, res) => {
//     try {
//         const data = await fsPromises.readFile(filePath);
//         const jsonData = await JSON.parse(data);

//         console.log('jsonData: ');
//         console.log(jsonData);

//         const userIndex = jsonData.findIndex(user => user.userId === req.params.userId);

//         jsonData[userIndex] = { ...jsonData[userIndex], ...req.body }; //se actualiza el usuario

//         await fsPromises.writeFile(filePath, JSON.stringify(jsonData));

//         console.log('jsonData: ');
//         console.log(jsonData);

//         res.send(jsonData);
//     } catch (error) {
//         res.send({ error: error });
//     }

//     res.end();
// };

// controller.deleteUser = async (req, res) => {
//     try {
//         const data = await fsPromises.readFile(filePath);
//         const jsonData = await JSON.parse(data);
//         console.log('jsonData: ');
//         console.log(jsonData);

//         const filteredData = jsonData.filter(v => v.userId !== req.params.userId); //devuelve un array
//         console.log('ahora jsonData: ', filteredData);

//         await fsPromises.writeFile(filePath, JSON.stringify(filteredData));
//         res.send(filteredData);
//     } catch (error) {
//         res.send({ error: error });
//     }

//     res.end();
// };

module.exports = controller;
