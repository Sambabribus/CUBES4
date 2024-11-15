const db = require('../config/db'); // Connexion à la base de données

class OrdersModel {
    static create(order_date, quantity, Id_Users, callback) {
        const query = `INSERT INTO Orders (order_date, quantity, Id_Users) VALUES (?, ?, ?)`;
        db.query(query, [order_date, quantity, Id_Users], (error, result) => {
            callback(error, result ? result.insertId : null); // Utilisation du callback
        });
    }

    static findAll(callback) {
        const query = `SELECT * FROM Orders`;
        db.query(query, (error, result) => {
            callback(error, result);
        });
    }

    static findById(id, callback) {
        const query = `SELECT * FROM Orders WHERE Id_Orders = ?`;
        db.query(query, [id], (error, result) => {
            callback(error, result ? result[0] : null); // Retourne la première commande ou null si non trouvée
        });
    }

    static update(id, order_date, quantity, Id_Users, callback) {
        const query = `UPDATE Orders SET order_date = ?, quantity = ?, Id_Users = ? WHERE Id_Orders = ?`;
        db.query(query, [order_date, quantity, Id_Users, id], (error, result) => {
            callback(error, result ? result.affectedRows : 0); // Retourne le nombre de lignes affectées
        });
    }

    static delete(id, callback) {
        const query = `DELETE FROM Orders WHERE Id_Orders = ?`;
        db.query(query, [id], (error, result) => {
            callback(error, result ? result.affectedRows : 0); // Retourne le nombre de lignes supprimées
        });
    }
}

module.exports = OrdersModel;
