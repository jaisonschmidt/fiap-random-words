// GET /api/words

/**
 * TODO
 * acessar uma api que retorna 5 palavras randomicas
 * implementar variáveis de ambiente usando dotenv
 * improvement: criar um service para isso
 */

const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({ message: 'GET /api/words' });
});

module.exports = routes;