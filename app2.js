const fs = require('fs');

// leitura sincrona 
var arquivo = fs.readFileSync('texto.txt', 'utf8');
console.log(arquivo);

// leitura assincrona
fs.readFile('texto.txt', 'utf8', function(erro, dados)
{
	console.log(dados);
});

fs.writeFile('texto.txt', 'Olá Mundo!');