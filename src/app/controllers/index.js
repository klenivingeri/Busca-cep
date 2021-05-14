const axios = require('axios')
class CepController{
    async endereco(req, res){
        
        try {
            const  { data } =  await axios(`https://viacep.com.br/ws/${req.params.cep}/json/`)
            const endress ={
                cep: data.cep,
                logradouro: data.logradouro ,
                bairro: data.bairro, 
                localidade: data.localidade,
                uf: data.uf,
             }
            if(data.erro){
                return res.status(401).json(data)
            }
            return res.status(200).json(endress)
        } catch (error) {
            console.log(error)
            return res.status(401).json({message: 'Failed to return Api data' })
        }
        
    }
}

module.exports = new CepController();
