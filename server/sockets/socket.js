const { io } = require('../server')

io.on('connection', (client) => {

	console.log('Usuario conectado')

	client.emit('enviarMensaje', {
		usuario: 'Administrador',
		mensaje: 'Bienvenido a esta aplicación'
	})

	client.on('disconnect', () => {

		console.log('Usuario desconectado')

	})

	// Escuchar el cliente
	client.on('enviarMensaje', (data, callback) => {

		console.log(data)

		// Para enviar solo al usuario emisor
		//client.emit('enviarMensaje', data)

		// Para enviarselo a todos los usuarios que esten escuchando este canal
		client.broadcast.emit('enviarMensaje', data)

		/*if (mensaje.usuario) {

			callback({
				resp:'TODO SALIO BIEN'
			});

		}else{
			callback({
				resp:'TODO SALIO MAL'
			});
		}*/


	})

})