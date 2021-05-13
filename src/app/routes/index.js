const routes = require('express').Router();

const CepController = require('../controllers')

routes.get('/localiza/:cep', CepController.endereco)
module.exports = routes;