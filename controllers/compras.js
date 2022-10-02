const main = {
	crearCompras: function(req, res) {
		res.send('creando la compra');
	},

	borrarCompras: function(req, res) {
		res.send('borrando la compra');
	},
	editarCompras: function(req, res) {
		res.send('editando la compra');
	}
};
module.exports = main;
