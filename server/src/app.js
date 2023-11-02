const express = require('express');
const app = express();
const cors = require('cors');

// Rutas

// Middlewares para cliente
app.use(
    cors({
        origin: '*', // o camia por la URL de tu aplicacion de React
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'], // corrige  rl nombre encabezado
    })
);
app.use(express.json());

// Uso de rutas
app.get('/', (req, res) => {
    res.send({ message: 'RUTA GET OK' });
});

app.post('/', (req, res) => {
    res.send({ message: 'RUTA POST OK' });
});

app.listen(3000, () => console.log('Servidor en ejecución en el puerto 3000'));
