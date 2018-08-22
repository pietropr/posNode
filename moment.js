const moment = require('moment');
moment.locale('pt-BR');
// console.log(moment().format('L'));

//Teste do nodemon
var http = require('http');

http.createServer( function(req, res) 
{

	res.writeHead(200 , {"Content-Type": "text/html"});
	res.write('<meta charset="utf8" />')
	res.write('<h2>Olá mundo</h2>');
	res.write('<h2>Olá mundo</h2>');
	res.end('<h2>Olá mundo</h2>');

}).listen(3000);

console.log('Servidor iniciado');