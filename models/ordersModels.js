const db = require('../config/db'); // Connexion à la base de données

class OrdersModel {
    static create(order_date, Id_users, callback) {
        const query = `INSERT INTO orders (order_date, Id_users) VALUES (?, ?)`;
        db.query(query, [order_date, Id_users], (error, result) => {
            callback(error, result ? result.insertId : null); // Utilisation du callback
        });
    }

    static findAll(callback) {
        const query = `SELECT * FROM orders`;
        db.query(query, (error, result) => {
            callback(error, result);
        });
    }

    static findById(id, callback) {
        const query = `SELECT * FROM orders WHERE Id_orders = ?`;
        db.query(query, [id], (error, result) => {
            callback(error, result ? result[0] : null); // Retourne la première commande ou null si non trouvée
        });
    }

    static update(id, order_date, Id_users, callback) {
        const query = `UPDATE orders SET order_date = ?, Id_users = ? WHERE Id_orders = ?`;
        db.query(query, [order_date, Id_users, id], (error, result) => {
            callback(error, result ? result.affectedRows : 0); // Retourne le nombre de lignes affectées
        });
    }

    static delete(id, callback) {
        const query = `DELETE FROM orders WHERE Id_orders = ?`;
        db.query(query, [id], (error, result) => {
            callback(error, result ? result.affectedRows : 0); // Retourne le nombre de lignes supprimées
        });
    }
}

module.exports = OrdersModel;
