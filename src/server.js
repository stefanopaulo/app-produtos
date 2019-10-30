const port = 3033

const express = require('express')
const bodyParser = require('body-parser')
const db = require('./database')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res) => {
    res.send(db.getProdutos()) // Converter para JSON
})

app.get('/produtos/:id', (req, res) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res) => {
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.params.id
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res) => {
    const produto = db.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))