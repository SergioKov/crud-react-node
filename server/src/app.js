const express = require('express');
const app = express();
const cors = require('cors');

const dotenv = require('dotenv');
const databaseConnect = require('../database/database');
dotenv.config();

// Rutas
const userRoutes = require('./routes/user.routes');

app.use(express.json());
app.use(userRoutes);

//Uso de rutas
databaseConnect();

// Middlewares para cliente
app.use(
    cors({
        origin: '*', // o camia por la URL de tu aplicacion de React
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'], // corrige  el nombre encabezado
    })
);

app.get('/', (req, res) => {
    res.send({ message: 'RUTA GET OK' });
});

app.post('/', (req, res) => {
    res.send({ message: 'RUTA POST OK' });
});

app.listen(process.env.PORT, () => console.log(`--- Servidor en ejecución en el puerto ${process.env.PORT}`));
