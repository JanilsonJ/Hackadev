const produtoData = require("../data/produtoData.js");

const getProdutos = () => {
    return produtoData.getProdutos();
}

const getProdutosFiltered = (filter) => {
    filter = filter?.charAt(0).toUpperCase() + filter?.slice(1);

    return produtoData.getProdutosFiltered(filter);
}

const getProdutoById = (id) => {
    return produtoData.getProdutoById(id);
}

const getProdutoBySku = (sku) => {
    return produtoData.getProdutoBySku(sku);
}

const getProductSizesByID = (id) => {
    return produtoData.getProductSizesByID(id);
}

const insertProduto = (data) => {
    return produtoData.insertProduto(data);
}

const updateProdutoById = (id, data) => {
    return produtoData.updateProdutoById(id, data);
}

const deleteProdutoById = (id) => {
    return produtoData.deleteProdutoById(id);
}

const produtoService = {
    getProdutos,
    getProdutosFiltered,
    getProdutoById,
    getProdutoBySku,
    getProductSizesByID,
    insertProduto,
    updateProdutoById,
    deleteProdutoById
};

module.exports = produtoService;