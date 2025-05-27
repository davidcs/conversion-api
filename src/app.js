const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors()); // ← Isso libera o acesso externo
app.use(express.json());

const routes = require('./routes');
app.use('/api', routes);

module.exports = app;
