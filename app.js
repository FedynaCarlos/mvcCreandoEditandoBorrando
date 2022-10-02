const express = require('express');
const main = require('./controllers/usuarios');
const app = express();
const port = 3002;

const rutasUsuarios = require('./routes/index');
const rutasProductos = require('./routes/productos');
const rutasCompras = require('./routes/compras');

app.use('/usuarios', rutasUsuarios);
app.use('/productos', rutasProductos);
app.use('/compras', rutasCompras);

app.listen(port, () => {
	console.log('servidor corriendo en el puerto' + port);
});
