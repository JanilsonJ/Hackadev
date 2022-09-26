const db = require("../infra/conection.js");

const customerExists = async (id) => {
    const customer = await db.query(`SELECT * FROM customer WHERE id = ${id}`);

    return customer.length === 0
}

const getCustomers = () => {
    return db.query(`SELECT * FROM customer`);
}

const getCustomerById = async (id) => {
    if ( await customerExists(id))  
        return `Cliente(${id}) não encontrado.` 

    return db.one(`SELECT * FROM customer WHERE id = ${id}`);
}

const validateLogin = async (data) => {
    const { email, password } = data;

    const id = await db.oneOrNone(`SELECT id FROM customer WHERE email = '${email}' AND password = '${password}'`);

    return id ? await db.oneOrNone(`
    SELECT * FROM customer 
    LEFT JOIN customer_address ON customer_address.customer_id = customer.id 
    LEFT JOIN customer_card ON customer_card.customer_id = customer.id 
    WHERE customer.id = ${id.id}`) : false;
}

const insertCustomer = (data) => {
    const { name, cpf, birth, email, password, tel, adm } = data;

    return db.query(`INSERT INTO customer VALUES (DEFAULT, '${name}', '${cpf}', '${birth}', '${email}', '${password}', '${tel}', false); `);
}

const insertCustomerAddress = (data) => {
    const { customer_id, cep, address, complement, district, city, state } = data;

    return db.query(`INSERT INTO customer VALUES (DEFAULT, ${customer_id}, '${cep}', '${address}', '${complement}', '${district}', '${city}', '${state}'); `);
}

const insertCustomerCard = (data) => {
    const { customer_id, card_number, card_name, expiry, cvv } = data;

    return db.query(`INSERT INTO customer VALUES (DEFAULT, '${customer_id}', '${card_number}', '${card_name}', '${expiry}', '${cvv}'); `);
}

const updateCustomerById = async (id, data) => {
    const { name, cpf, birth, email, password, tel, adm } = data;

    if (await customerExists(id))  
        return `Cliente(${id}) não encontrado.` 
    
    db.query(`
        UPDATE customer SET 
            name = '${name}',
            cpf = '${cpf}',
            birth = '${birth}',
            email = '${email}',
            password = '${password}',
            tel = '${tel}',
            adm = '${adm}'
        WHERE id = ${id}`
    );

    return `Cliente ${name} atualizado com sucesso!`
}

const deleteCustomerById = async (id) => {
    if ( await customerExists(id))  
        return `Cliente(${id}) não encontrado.` 
    
    db.query(`DELETE FROM customer WHERE id = ${id}`)

    return `Cliente(${id}) excluído com sucesso!`
}

const customerData = {
    getCustomers,
    getCustomerById,
    insertCustomerAddress,
    insertCustomerCard,
    validateLogin,
    insertCustomer,
    updateCustomerById,
    deleteCustomerById
}

module.exports = customerData;