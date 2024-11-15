const db = require('../config/db');

const Suppliers = {
    create: async (data) => {
        const sql = 'INSERT INTO Suppliers (name, adresses, phone_number, mail, region, alcohol_provided) VALUES (?, ?, ?, ?, ?, ?)';
        const [result] = await db.query(sql, [data.name, data.adresses, data.phone_number, data.mail, data.region, data.alcohol_provided]);
        return result;
    },

    findAll: async () => {
        const sql = 'SELECT * FROM Suppliers';
        const [results] = await db.query(sql);
        return results;
    },

    findById: async (id) => {
        const sql = 'SELECT * FROM Suppliers WHERE Id_Suppliers = ?';
        const [results] = await db.query(sql, [id]);
        return results;
    },

    update: async (id, data) => {
        const sql = 'UPDATE Suppliers SET name = ?, adresses = ?, phone_number = ?, mail = ?, region = ?, alcohol_provided = ? WHERE Id_Suppliers = ?';
        const [result] = await db.query(sql, [data.name, data.adresses, data.phone_number, data.mail, data.region, data.alcohol_provided, id]);
        return result;
    },

    delete: async (id) => {
        const sql = 'DELETE FROM Suppliers WHERE Id_Suppliers = ?';
        const [result] = await db.query(sql, [id]);
        return result;
    },
};

module.exports = Suppliers;
//a