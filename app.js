var express = require('express');
var app = express();
var rotaUsuario = require('./usuarios.js');

//Set permite configurar head HTTP
app.set('view engine', 'ejs');

//HOME - O render, diferente do 'send', chama um template da pasta views
app.get('/', function(req, res) {
	res.render('principal/index', {nome: 'Pietro', sobrenome: 'Pinton'});
});

// Rota para usuários
app.use('/usuarios', rotaUsuario);
//Rota estilos
app.use('/assets', express.static('./assets'));


app.listen(3000);
console.log('Servidor iniciado na porta 3000');