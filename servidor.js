const cors = require('cors')
const express = require('express');
const app = express()
const axios = require('axios')



app.use(cors())

app.get('/:cep', async (req, res) => {

    const cep = verificaCep(req.params.cep.replace(/[-]/, '').substring(0,8))

    try {
        const  { data } =  await axios(`https://viacep.com.br/ws/${cep}/json/`)
        return res.json(data)
    } catch (error) {
        console.log(error)
    }
    
     
     

    


})

app.listen(4000)

const verificaCep = (rota) =>{
    while(rota.length <= 7){
        rota = rota + '0'
    }
    return rota
}