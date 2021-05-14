const routes = require('express').Router();

const CepController = require('../controllers')

routes.get('/api/:cep', CepController.endereco)


module.exports = routes;

