const express = require("express");

const customerService = require("../service/customerService.js");

const customers = express.Router();

customers.get('/customer', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const result = await customerService.getCustomers();
    res.send(result)
})

customers.get('/customer/:id', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { id } = req.params;
    const result = await customerService.getCustomerById(id);

    return res.status(200).send(result)    
})

customers.post('/customer_validate', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const data = req.body
    
    const result = await customerService.validateLogin(data);

    return res.status(200).send(result);   
})

customers.post('/customer', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const data = req.body

    await customerService.insertCustomer(data);
    return res.status(200).send(`Cliente ${data.name} inserido com sucesso!`)
})

customers.post('/customer_address', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const data = req.body

    await customerService.insertCustomerAddress(data);
    return res.status(200).send(`Endereço ${data.name} inserido com sucesso!`)
})

customers.post('/customer_address', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const data = req.body

    await customerService.insertCustomerAddress(data);
    return res.status(200).send(`Cliente ${data.name} inserido com sucesso!`)
})

customers.put('/customer/:id', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { id } = req.params;
    const data = req.body

    const result = await customerService.updateCustomerById(id, data);
    return res.status(200).send(result)
})

customers.delete('/customer/:id', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { id } = req.params;

    const result = await customerService.deleteCustomerById(id);
    return res.status(200).send(result)
})
    
module.exports = customers;