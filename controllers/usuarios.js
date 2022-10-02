const datos = require('./models/datos');
const datos2 = require('./models/datos2');
const main = {
	crearUsuario: function(req, res) {
		res.send('creando el usuario');
	},

	borrarUsuario: function(req, res) {
		res.send('borrando el usuario');
	},
	editarUsuario: function(req, res) {
		res.send('editando el usuario');
	},
	mostrarUsuario: function(req, res) {
		res.send(' nombre: ' + datos.nombre + ' apellido: ' + datos.apellido + ' edad: ' + datos.edad);
	},
	buscarUsuario: function(req, res) {
		res.send(' hablante: ' + datos2.hablante + ' cantante: ' + datos2.cantante + ' cancion: ' + datos2.cancion);
	}
};
module.exports = main;
