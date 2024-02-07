

const express = require('express');
const logger = require('./src/logger');
require('dotenv').config(); // Cargar variables de entorno desde .env

// Rutas
const testRoute = require('./src/controllers/testRoute');

const app = express();

// Middleware para registrar todas las solicitudes
app.use(require('./src/middleware/loggerMiddleware'));

// Rutas
app.use('/test', testRoute);

// Manejo de errores
app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send('Error interno del servidor');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Servidor iniciado en el puerto ${PORT}`);
});
