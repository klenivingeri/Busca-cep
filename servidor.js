const express = require('express');
const app = express()

app.get('/:cep', (req, res) => {
    return res.json({cep: req.params.cep})
})

app.listen(4000)