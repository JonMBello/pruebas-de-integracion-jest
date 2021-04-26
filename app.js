const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const posts = require('./src/index');
const authenticate = require('./middlewares/authenticate');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const postHandlers = posts({axios});
app.post('/', authenticate, postHandlers.post);

app.listen(port, () => console.log(`Aplicación escuchando en el puerto ${port}`));

module.exports = app;