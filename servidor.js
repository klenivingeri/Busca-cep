const cors = require('cors')
const express = require('express');
const app = express()

app.use(cors())

app.get('/:cep', (req, res) => {
    return res.json({cep : req.params.cep})
    console.log()
})

app.listen(4000)