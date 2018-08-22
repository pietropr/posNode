var express = require('express');
var app = express();
var rotaUsuario = require('./usuarios.js');

// Rota para usuários
app.use('/usuarios', rotaUsuario);
//Rota estilos
app.use('/assets', express.static('./assets'));

app.get('/', function(req, res) {
	res.send('<link rel="stylesheet" href="assets/app.css"><h3>Bem vindo ao primeiro projeto Node</h3>');
});

app.listen(3000);
console.log('Servidor iniciado na porta 3000');