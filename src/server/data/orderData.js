const db = require("../infra/conection.js");

const orderExists = async (id) => {
    const order = await db.query(`SELECT * FROM order_details WHERE id = ${id}`);

    return order.length === 0
}

const getOrders = () => {
    return db.query(`SELECT * FROM order_details AS od INNER JOIN order_items AS oi ON oi.order_id = od.id `);
}

const getOrderDetailsByUserId = (id) => {
    return db.query(`
        SELECT * FROM order_details
        INNER JOIN order_items ON order_items.order_id = order_details.id
        INNER JOIN product_attributes ON product_attributes.sku = order_items.product_sku
        INNER JOIN product ON product.id = product_attributes.product_id
        WHERE customer_id = ${id} 
        ORDER BY order_details.id
    `);
}

const getOrderItemsByDetailsId = (id) => {
    return db.query(`
        SELECT * FROM order_items
        INNER JOIN product ON order_items.product_id = product.id
        WHERE order_id = '${id}'
    `);
}

const getOrderById = async (id) => {	
    if (await orderExists(id))  
        return `Pedido(${id}) não encontrado.` 

    return db.query(`SELECT * FROM order_details WHERE id = ${id}`);
}

const getOrderDetails = () => {
    return db.query(`SELECT * FROM order_details`);
}

const getOrderItems = () => {
    return db.query(`SELECT * FROM order_items`);
}

const insertOrderDetails = async (data) => {
    const {id, customer_id, order_date, total_price, installments, order_address } = data;

    return await db.query(`INSERT INTO order_details VALUES (${id}, ${Number(customer_id)}, TO_DATE('${order_date}', 'DD/MM/YY'), ${Number(total_price)}, ${Number(installments)}, '${order_address}');`);
}

const insertOrderItems = async (data) => {
    const { order_id, product_sku, order_item_quantity, order_item_price } = data;

    return await db.query(`INSERT INTO order_items VALUES (DEFAULT, ${order_id}, '${product_sku}', ${Number(order_item_quantity)}, ${Number(order_item_price)});`);
}

const updateOrderById = async (id, data) => {
    const { customer_id, order_date, total_price, installments } = data;

    if (await orderExists(id))  
        return `Pedido(${id}) não encontrado.` 
    
    db.query(`
        UPDATE order_details SET 
            customer_id = '${customer_id}',
            order_date = TO_DATE('${order_date}', 'DD/MM/YYYY'),
            total_price = '${total_price}',
            installments = '${installments}'
        WHERE id = ${id}`
    );

    return `Pedido(${id}) atualizado com sucesso!`
}

const deleteOrderById = async (id) => {
    if ( await orderExists(id))  
        return `Pedido(${id}) não encontrado.` 
    
    db.query(`DELETE FROM order_details WHERE id = ${id}`)

    return `Pedido(${id}) excluído com sucesso!`
}

const orderData = {
    getOrders,
    getOrderById,
    getOrderDetailsByUserId,
    getOrderItemsByDetailsId,
    getOrderDetails,
    getOrderItems,
    insertOrderDetails,
    insertOrderItems,
    updateOrderById,
    deleteOrderById
}

module.exports = orderData;