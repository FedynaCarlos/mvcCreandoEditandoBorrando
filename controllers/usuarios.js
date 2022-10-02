const main = {
	crearUsuario: function(req, res) {
		res.send('creando el usuario');
	},

	borrarUsuario: function(req, res) {
		res.send('borrando el usuario');
	},
	editarUsuario: function(req, res) {
		res.send('editando el usuario');
	}
};
module.exports = main;
