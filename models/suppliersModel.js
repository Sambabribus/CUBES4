const db = require('../config/db');

const Suppliers = {
    create: (data, callback) => {
        const sql = 'INSERT INTO suppliers (name, address, phone_number, mail, region, alcohol_provided) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(sql, [data.name, data.address, data.phone_number, data.mail, data.region, data.alcohol_provided], callback);
    },
    findAll: (callback) => {
        const sql = 'SELECT * FROM suppliers';
        db.query(sql, callback);
    },
    findById: (id, callback) => {
        const sql = 'SELECT * FROM suppliers WHERE Id_suppliers = ?';
        db.query(sql, [id], callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE suppliers SET name = ?, address = ?, phone_number = ?, mail = ?, region = ?, alcohol_provided = ? WHERE Id_suppliers = ?';
        db.query(sql, [data.name, data.address, data.phone_number, data.mail, data.region, data.alcohol_provided, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM suppliers WHERE Id_suppliers = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Suppliers;