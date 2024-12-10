const db = require('../config/db');

class OrdersSuppliersModel {
    static create(order_date, Id_suppliers, callback) {
        const query = `INSERT INTO orders_suppliers (order_date, Id_suppliers) VALUES (?, ?)`;
        db.query(query, [order_date, Id_suppliers], (error, result) => {
            callback(error, result ? result.insertId : null);
        });
    }

    static findAll(callback) {
        const query = `SELECT * FROM orders_suppliers`;
        db.query(query, (error, result) => {
            callback(error, result);
        });
    }

    static findById(id, callback) {
        const query = `SELECT * FROM orders_suppliers WHERE Id_orders_suppliers = ?`;
        db.query(query, [id], (error, result) => {
            callback(error, result ? result[0] : null);
        });
    }

    static update(id, order_date, Id_suppliers, callback) {
        const query = `UPDATE orders_suppliers SET order_date = ?, Id_suppliers = ? WHERE Id_orders_suppliers = ?`;
        db.query(query, [order_date, Id_suppliers, id], (error, result) => {
            callback(error, result ? result.affectedRows : 0);
        });
    }

    static delete(id, callback) {
        const query = `DELETE FROM orders_suppliers WHERE Id_orders_suppliers = ?`;
        db.query(query, [id], (error, result) => {
            callback(error, result ? result.affectedRows : 0);
        });
    }
}

module.exports = OrdersSuppliersModel;
