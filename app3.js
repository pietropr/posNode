// usado para criar servers
const http = require('http');
const fs = require('fs');

http.createServer( function( req, res)
{
	res.writeHead(200, 'OK', {'Content-Type': 'text/html'});
	var pagina = fs.readFileSync('index.html');
	// pagina = pagina.replace('{Mensagem}', 'Ola mundo');
	res.end(pagina);
	// res.write('<h1>Inserção no servidor</h1>')
	// res.write('<p>Nodejs - Matéria Pós PUC</h1>')
	console.log(req.url);
}).listen(8085, '127.0.0.1');

console.log('Servidor rodando na porta 8080')