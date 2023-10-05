const express = require('express');
const {validarSenha} = require('./middleware');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(validarSenha);
app.use(router);

app.listen(3000);