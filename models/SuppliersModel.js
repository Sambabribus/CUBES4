const db = require('../config/db');

const Suppliers = {
    create: (data, callback) => {
        const sql = 'INSERT INTO Suppliers (name, adresses, phone_number, mail, region, alcohol_provided) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(sql, [data.name, data.adresses, data.phone_number, data.mail, data.region, data.alcohol_provided], callback);
    },
    findAll: (callback) => {
        const sql = 'SELECT * FROM Suppliers';
        db.query(sql, callback);
    },
    findById: (id, callback) => {
        const sql = 'SELECT * FROM Suppliers WHERE Id_Suppliers = ?';
        db.query(sql, [id], callback);
    },
    update: (id, data, callback) => {
        const sql = 'UPDATE Suppliers SET name = ?, adresses = ?, phone_number = ?, mail = ?, region = ?, alcohol_provided = ? WHERE Id_Suppliers = ?';
        db.query(sql, [data.name, data.adresses, data.phone_number, data.mail, data.region, data.alcohol_provided, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM Suppliers WHERE Id_Suppliers = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = Suppliers;