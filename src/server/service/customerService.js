const customerData = require("../data/customerData.js");

const getCustomers = () => {
    return customerData.getCustomers();
}

const getCustomerById = (id) => {
    return customerData.getCustomerById(id);
}

const validateLogin = (data) => {
    return customerData.validateLogin(data);
}

const insertCustomer = (data) => {
    return customerData.insertCustomer(data);
}

const insertCustomerAddress = (data) => {
    return customerData.insertCustomerAddress(data);
}

const insertCustomerCard = (data) => {
    return customerData.insertCustomerCard(data);
}

const updateCustomerById = (id, data) => {
    return customerData.updateCustomerById(id, data);
}

const deleteCustomerById = (id) => {
    return customerData.deleteCustomerById(id);
}

const customerService = {
    getCustomers,
    getCustomerById,
    validateLogin,
    insertCustomer,
    insertCustomerAddress,
    insertCustomerCard,
    updateCustomerById,
    deleteCustomerById
};

module.exports = customerService;