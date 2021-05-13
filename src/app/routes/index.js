const routes = require('express').Router();

const CepController = require('../controllers')

routes.get('/api/:cep', CepController.endereco)

routes.get('/tt/:cep', async(req, res)=> {
    
    console.log(res.params)
    return res.status(200).json({
        status: 200,
        name:'Erick' })
})

module.exports = routes;

