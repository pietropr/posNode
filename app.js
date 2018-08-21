//Const = cria variavel
const EventEmitter = require('events');

const emissor = new EventEmitter();

emissor.on('click', function() {
	console.log('Olá mundo!');
});

emissor.emit('click');