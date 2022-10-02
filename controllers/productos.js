const main = {
	crearProducto: function(req, res) {
		res.send('creando el producto');
	},

	borrarProducto: function(req, res) {
		res.send('borrando el producto');
	},
	editarProducto: function(req, res) {
		res.send('editando el producto');
	}
};
module.exports = main;
