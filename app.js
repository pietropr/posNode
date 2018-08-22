var express = require('express');
var app = express();
var rotaUsuario = require('./usuarios.js');

// Rota para usuários
app.use('/usuarios', rotaUsuario);

app.listen(3000);
console.log('Servidor iniciado na porta 3000');