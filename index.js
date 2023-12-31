require('dotenv').config();

const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
const { default: mongoose } = require('mongoose');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Base de datos
dbConnection();

// Directorio publico
app.use( express.static('public'));

// Rutas
app.use('/api/mazos', require('./routes/mazos'));

app.listen( 3000, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
})