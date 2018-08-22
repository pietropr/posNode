var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});

// Lista usuários
router.get('/', function(req, res) {
	res.send('<h2>Lista de Usuários</h2>');
	console.log(req.url);
});

//Novo parametro na rota Usuario
router.param('id', function(req, res, next, id) {
	if(id == 1) {
		req.codigo = '01';
	}
	if(id == 2) {
		req.codigo = '02';
	}
});

// Usuario
router.get('/:id', function(req, res) {
	res.send(`<h2>Usuário código ${req.params.id}</h2>`);
	console.log(req.url);
});


// Editar usuário
router.get('/editar/:id', function(req, res) {
	var resp = `<form method='post' action='/usuarios/editar/${req.params.id}'><p>ID: ${req.params.id}</p>
	Nome: <input type='text' name='nome'><br>
	Email: <input type='email' name='email'><br>
	<input type='submit' value='Enviar' name='enviar'>
	</form>`;
	res.send(resp);
	console.log(req.url);
});

//Post atualiza
router.post('/editar/:id', urlEncodedParser, function(req, res) {
	res.send(`<h3>Usuário atualizado</h3>
			<p>Nome: ${req.body.nome}<br>
			Email: ${req.body.email}`
	);
	console.log(req.body);
});




module.exports = router;