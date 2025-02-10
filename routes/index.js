const express = require('express');
const wordsRoutes = require('./words');

const routes = express.Router();

routes.use('/words', wordsRoutes);

module.exports = routes;