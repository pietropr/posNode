var express = require('express');
var app = express();

app.get('/app', function(req, res) {
	res.send('Olá mundo');
});

app.use('/app/produto', function(req, res) {
	console.log(req.url);
});


app.get('/app/produto/:acao/:id', function(req, res) {
	res.send(`<p>Método: ${req.params.acao}</p>
			<p>ID: ${req.params.id}</p>`);
});

app.listen(3000);