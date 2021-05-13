const axios = require('axios')
class CepController{
    async endereco(req, res){
        
        try {
            const  { data } =  await axios(`https://viacep.com.br/ws/${req.params.cep}/json/`)
            return res.json(data)
        } catch (error) {
            console.log(error)
        }
        
    }
}

module.exports = new CepController();