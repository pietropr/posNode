//Const = cria variavel
const EventEmitter = require('events');

class MinhaClasse extends EventEmitter
{
	constructor()
	{
		super();

	}
}

const meuObjeto = new MinhaClasse();

const emissor = new EventEmitter();

//cria o evento
meuObjeto.on('click', function() {
	console.log('Olá mundo!');
});

//chama o evento
meuObjeto.emit('click');