const main = require('../controllers/compras');
const { Router } = require('express');

const routes = Router();

routes.get('/crear', main.crearCompras);
routes.get('/borrar', main.borrarCompras);
routes.get('/editar', main.editarCompras);

module.exports = routes;
