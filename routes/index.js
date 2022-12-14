const main = require('../controllers/usuarios');
const { Router } = require('express');

const routes = Router();

routes.get('/crear', main.crearUsuario);
routes.get('/borrar', main.borrarUsuario);
routes.get('/editar', main.editarUsuario);
routes.get('/mostrar', main.mostrarUsuario);
routes.get('/buscar', main.buscarUsuario);

module.exports = routes;
