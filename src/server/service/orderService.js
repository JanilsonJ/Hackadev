const orderData = require("../data/orderData.js");

const getOrders = () => {
    return orderData.getOrders();
}

const getOrderById = (id) => {
    return orderData.getOrderById(id);
}

const getOrderDetailsByUserId = (id) => {
    return orderData.getOrderDetailsByUserId(id);
}

const getOrderItemsByDetailsId = (id) => {
    return orderData.getOrderItemsByDetailsId(id);
}

const getOrderDetails = () => {
    return orderData.getOrderDetails();
}

const getOrderItems = (data) => {
    return orderData.getOrderItems();
}

const insertOrderDetails = (data) => {
    return orderData.insertOrderDetails(data);
}

const insertOrderItems = (data) => {
    return orderData.insertOrderItems(data);
}

const updateOrderById = (id, data) => {
    return orderData.updateOrderById(id, data);
}

const deleteOrderById = (id) => {
    return orderData.deleteOrderById(id);
}

const orderService = {
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
};

module.exports = orderService;