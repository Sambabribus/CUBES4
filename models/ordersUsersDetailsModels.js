const db = require('../config/db');

class OrdersUsersDetailsModel {
    static create(quantity, price, Id_items, Id_orders, callback) {
        const query = `INSERT INTO orders_users_details (quantity, price, Id_items, Id_orders) VALUES (?, ?, ?, ?)`;
        db.query(query, [quantity, price, Id_items, Id_orders], (error, result) => {
            callback(error, result ? result.insertId : null);
        });
    }

    static findAll(callback) {
        const query = `SELECT * FROM orders_users_details`;
        db.query(query, (error, result) => {
            callback(error, result);
        });
    }

    static findById(id, callback) {
        const query = `SELECT * FROM orders_users_details WHERE Id_orders_users_details = ?`;
        db.query(query, [id], (error, result) => {
            callback(error, result ? result[0] : null);
        });
    }

    static update(id, quantity, price, Id_items, Id_orders, callback) {
        const query = `UPDATE orders_users_details SET quantity = ?, price = ?, Id_items = ?, Id_orders = ? WHERE Id_orders_users_details = ?`;
        db.query(query, [quantity, price, Id_items, Id_orders, id], (error, result) => {
            callback(error, result ? result.affectedRows : 0);
        });
    }

    static delete(id, callback) {
        const query = `DELETE FROM orders_users_details WHERE Id_orders_users_details = ?`;
        db.query(query, [id], (error, result) => {
            callback(error, result ? result.affectedRows : 0);
        });
    }
}

module.exports = OrdersUsersDetailsModel;
