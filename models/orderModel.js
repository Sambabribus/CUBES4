const db = require('../config/db');

class OrderModel {
    static async create(order_date, quantity, Id_Users) {
        const query = `INSERT INTO Orders (order_date, quantity, Id_Users) VALUES (?, ?, ?)`;
        const [result] = await db.query(query, [order_date, quantity, Id_Users]);
        return result.insertId;
    }

    static async findAll() {
        const query = `SELECT * FROM Orders`;
        const [orders] = await db.query(query);
        return orders;
    }

    static async findById(id) {
        const query = `SELECT * FROM Orders WHERE Id_Orders = ?`;
        const [order] = await db.query(query, [id]);
        return order[0];
    }

    static async update(id, order_date, quantity, Id_Users) {
        const query = `UPDATE Orders SET order_date = ?, quantity = ?, Id_Users = ? WHERE Id_Orders = ?`;
        const [result] = await db.query(query, [order_date, quantity, Id_Users, id]);
        return result.affectedRows;
    }

    static async delete(id) {
        const query = `DELETE FROM Orders WHERE Id_Orders = ?`;
        const [result] = await db.query(query, [id]);
        return result.affectedRows;
    }
}

module.exports = OrderModel;
