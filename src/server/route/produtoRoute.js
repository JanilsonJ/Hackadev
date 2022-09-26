const express = require("express");

const produtoService = require('../service/produtoService.js');

const produtos = express.Router();

produtos.get('/produtos', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const produto = await produtoService.getProdutos();
    res.send(produto)
})

produtos.get('/produtos/:filter', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { filter } = req.query;
    
    const produto = await produtoService.getProdutosFiltered(filter);
    res.send(produto)
})

produtos.get('/produto/:id', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { id } = req.params;
    const produto = await produtoService.getProdutoById(id);

    return res.status(200).send(produto)    
})

produtos.get('/produto/sizes/:id', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { id } = req.params;
    const produto = await produtoService.getProductSizesByID(id);

    return res.status(200).send(produto)    
})

produtos.get('/produto/sku/:sku', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { sku } = req.params;
    const produto = await produtoService.getProdutoBySku(sku);

    return res.status(200).send(produto)    
})

produtos.post('/produto', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const data = req.body

    await produtoService.insertProduto(data);
    return res.status(200).send(`Produto ${data.name} inserido com sucesso!`)
})

produtos.put('/produto/:id', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { id } = req.params;
    const data = req.body

    const result = await produtoService.updateProdutoById(id, data);
    return res.status(200).send(result)
})

produtos.delete('/produto/:id', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { id } = req.params;

    const result = await produtoService.deleteProdutoById(id);
    return res.status(200).send(result)
})
    
module.exports = produtos;