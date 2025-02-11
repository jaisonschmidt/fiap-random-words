const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

require("dotenv").config();

const port = process.env.PORT || 4000;

// parse de JSON para objetos JavaScript
app.use(express.json());

// requisições de outro domínio são permitidas
app.use(cors());

app.use('/api', routes);

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!!' });
});

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = server;