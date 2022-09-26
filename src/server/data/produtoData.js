const db = require("../infra/conection.js");

const productExists = async (id) => {
    const product = await db.query(`SELECT * FROM product WHERE id = ${id}`);

    return product.length === 0
}

const getProdutos = () => {
    return db.query(`SELECT * FROM product`);
}

const getProdutosFiltered = (filter) => {
    return db.query(`SELECT * FROM product WHERE unaccent(name) ILIKE '%${filter}%' OR unaccent(category) ILIKE '%${filter}%'`);
}

const getProdutoById = async (id) => {
    if (await productExists(id)) 
        return `Produto(${id}) não encontrado.` 
      
    return db.one(`SELECT * FROM product WHERE id = ${id} `);
}

const getProdutoBySku = async (sku) => {
    if (await productExists(sku)) 
        return `SKU(${sku}) não encontrado.` 
      
    return db.one(`SELECT * FROM product INNER JOIN product_attributes ON product_id = id WHERE sku = '${sku}'`);
}

const getProductSizesByID = async (id) => {
    if (await productExists(id)) 
        return `Produto(${id}) não encontrado.`

    return db.query(`SELECT * FROM product_attributes WHERE product_id = ${id}`)
}

const insertProduto = (data) => {
    const { name, category, description, image1, image2, regular_price, actual_price, porcent_discount } = data;
    return db.query(`INSERT INTO product VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8); `, [name, category, description, image1, image2, regular_price, actual_price, porcent_discount]);
}

const updateProdutoById = async (id, data) => {
    const { name, category, description, image1, image2, regular_price, actual_price, porcent_discount } = data;
    
    if (await productExists(id))  
      return `Produto (${name}) não encontrado.` 
    
    db.query(`
        UPDATE product SET 
            name = '${name}',
            category = '${category}',
            description = '${description}',
            image1 = '${image1}',
            image2 = '${image2}',
            regular_price = '${regular_price}',
            actual_price = '${actual_price}',
            porcent_discount = '${porcent_discount}'
        WHERE id = ${id}`
    );

    return `Produto(${id}) atualizado com sucesso!`
}

const deleteProdutoById = async (id) => {
    if (await productExists(id))   
      return `Produto(${id}) não encontrado.` 

    db.query(`DELETE FROM product WHERE id = ${id}`)

    return `Produto(${id}) excluído com sucesso!`
}

const produtoData = {
    getProdutos,
    getProdutosFiltered,
    getProdutoById,
    getProdutoBySku,
    getProductSizesByID,
    insertProduto,
    updateProdutoById,
    deleteProdutoById
}

module.exports = produtoData;