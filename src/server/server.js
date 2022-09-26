const express = require("express");
const cors = require("cors");

const produtos = require("./route/produtoRoute.js");
const customers = require("./route/customerRoute.js");
const orders = require("./route/orderRoute.js");

const server = express();
const port = process.env.PORT || 8080;
server.use(cors('*'))
server.use(express.json());

server.use('/', produtos);
server.use('/', customers);
server.use('/', orders);

server.listen(port, () => {
    console.clear();
    console.log(`
        ***** Servidor ouvindo na porta 8080 *****
            http://localhost:${port}/produtos
            http://localhost:${port}/customer
            http://localhost:${port}/order
    `)
});