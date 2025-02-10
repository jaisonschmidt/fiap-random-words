// GET /api/words

/**
 * TODO
 * acessar uma api que retorna 5 palavras randomicas
 * implementar variáveis de ambiente usando dotenv
 * improvement: criar um service para isso
 */

const express = require("express");
const { randomWordsService } = require("../services/randomWordsService");
const routes = express.Router();

routes.get("/", async (req, res) => {
  try {
    const data = await randomWordsService(5);
    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = routes;
