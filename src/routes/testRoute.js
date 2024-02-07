

const express = require('express');
const router = express.Router();
const logger = require('../logger');

router.get('/', (req, res) => {
    logger.info('Endpoint de prueba llamado');
    res.send('Hola, este es un endpoint de prueba');
});

module.exports = router;
