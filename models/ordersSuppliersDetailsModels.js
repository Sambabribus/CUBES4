const db = require('../config/db');

class OrdersSuppliersDetailsModel {
    static create(quantity, price, Id_orders_suppliers, Id_items, callback) {
        const query = `INSERT INTO orders_suppliers_details (quantity, price, Id_orders_suppliers, Id_items) VALUES (?, ?, ?, ?)`;
        db.query(query, [quantity, price, Id_orders_suppliers, Id_items], (error, result) => {
            callback(error, result ? result.insertId : null);
        });
    }

    static findAll(callback) {
        const query = `SELECT * FROM orders_suppliers_details`;
        db.query(query, (error, result) => {
            callback(error, result);
        });
    }

    static findById(id, callback) {
        const query = `SELECT * FROM orders_suppliers_details WHERE Id_orders_suppliers_details = ?`;
        db.query(query, [id], (error, result) => {
            callback(error, result ? result[0] : null);
        });
    }

    static update(id, quantity, price, Id_orders_suppliers, Id_items, callback) {
        const query = `UPDATE orders_suppliers_details SET quantity = ?, price = ?, Id_orders_suppliers = ?, Id_items = ? WHERE Id_orders_suppliers_details = ?`;
        db.query(query, [quantity, price, Id_orders_suppliers, Id_items, id], (error, result) => {
            callback(error, result ? result.affectedRows : 0);
        });
    }

    static delete(id, callback) {
        const query = `DELETE FROM orders_suppliers_details WHERE Id_orders_suppliers_details = ?`;
        db.query(query, [id], (error, result) => {
            callback(error, result ? result.affectedRows : 0);
        });
    }
}

module.exports = OrdersSuppliersDetailsModel;
