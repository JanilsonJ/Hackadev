const express = require("express");

const orderService = require("../service/orderService.js");

const orders = express.Router();

orders.get('/order', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const result = await orderService.getOrders();
    res.send(result)
})

orders.get('/order/:id', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { id } = req.params;
    const result = await orderService.getOrderById(id);

    return res.status(200).send(result)    
})

orders.get('/user_orders/:id', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { id } = req.params;

    const result = await orderService.getOrderDetailsByUserId(id);

    return res.status(200).send(result)    
})

orders.get('/user_order_items/:id', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { id } = req.params;

    const result = await orderService.getOrderItemsByDetailsId(id);

    return res.status(200).send(result)    
})

orders.get('/order_details', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const result = await orderService.getOrderDetails();
    return res.status(200).send(result)
})

orders.get('/order_items', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*');

    const result = await orderService.getOrderItems();
    return res.status(200).send(result)
})

orders.post('/order_details', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const data = req.body

    await orderService.insertOrderDetails(data);
    return res.status(200).send(`Pedido registrado com sucesso!`)
})

orders.post('/order_items', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const data = req.body;

    await orderService.insertOrderItems(data);
    return res.status(200).send(`Pedido registrado com sucesso!`)
})

orders.put('/order/:id', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { id } = req.params;
    const data = req.body

    const result = await orderService.updateOrderById(id, data);
    return res.status(200).send(result)
})

orders.delete('/order/:id', async (req, res) => {
    //Compartilhar informações entre servidores diferentes
    res.setHeader('Access-Control-Allow-Origin', '*'); 

    const { id } = req.params;

    const result = await orderService.deleteOrderById(id);
    return res.status(200).send(result)
})
    
module.exports = orders;