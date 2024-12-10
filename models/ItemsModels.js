const db = require('../config/db');

const Items = {
    // Récupérer tous les items
    findAll: (callback) => {
        const sql = 'SELECT * FROM items';
        db.query(sql, callback);
    },

    // Récupérer un item par ID
    findById: (id, callback) => {
        const sql = 'SELECT * FROM items WHERE Id_items = ?';
        db.query(sql, [id], callback);
    },

    // Insérer un nouvel item dans la base de données
    create: (data, callback) => {
        // Mise en place des 2 lignes pour prendre en compte en JSON "supplier":{"Id_Suppliers":3},"order":{"id_Orders":9} au lieu de "Id_Suppliers":12,
        // "Id_Orders": 9
        // data.supplier verifie si data posséde une propriété et si cette propriété n'est pas null
        // ? operateur ternaire identique a if else
        // Si data.supplier est defini, il retourne data.supplier.Id_Suppliers sinon renvoi null
        const sql = `
            INSERT INTO items
            (name, alcohol_type, domain_name, millesime, purchase_price, selling_price, stock_quantity, description)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.name,
            data.alcohol_type,
            data.domain_name,
            data.millesime,
            data.purchase_price,
            data.selling_price,
            data.stock_quantity,
            data.description
        ];
        db.query(sql, values, callback);
    },

    // Mettre à jour un item par ID
    update: (id, data, callback) => {
        const sql = `
            UPDATE items
            SET
                name = ?,
                alcohol_type = ?,
                domain_name = ?,
                millesime = ?,
                purchase_price = ?,
                selling_price = ?,
                stock_quantity = ?,
                description = ?
            WHERE Id_items = ?
        `;
        const values = [
            data.name,
            data.alcohol_type,
            data.domain_name,
            data.millesime,
            data.purchase_price,
            data.selling_price,
            data.stock_quantity,
            data.description,
            id,
        ];
        db.query(sql, values, callback);
    },

    // Supprimer un item par ID
    delete: (id, callback) => {
        const sql = 'DELETE FROM items WHERE Id_items = ?';
        db.query(sql, [id], callback);
    },
};

module.exports = Items;