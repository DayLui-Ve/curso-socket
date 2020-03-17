var socket = io()

// ON son para escuchar
socket.on('connect', function() {
	console.log('conectado con el servidor')
})

socket.on('disconnect', function() {
	console.log('Perdimos conexion con el servidor')
})    	


// Enviar información
socket.emit('enviarMensaje', {
	usuario: 'Fernand',
	mensaje: 'Hola mundo'
}, function(resp){
	console.log('respuesta:',resp)
})

//Escuchar informancion
socket.on('enviarMensaje', function(data){
	console.log(data)
	alert( JSON.stringify(data) )
})