const db = require('../config/db'); // Assurez-vous que le chemin est correct

const Items = {
    // R�cup�rer tous les items
    findAll: (callback) => {
        const sql = 'SELECT * FROM Items';
        db.query(sql, callback);
    },

    // R�cup�rer un item par ID
    findById: (id, callback) => {
        const sql = 'SELECT * FROM Items WHERE Id_Items = ?';
        db.query(sql, [id], callback);
    },

    // Ins�rer un nouvel item dans la base de donn�es
    create: (data, callback) => {
        const sql = `
            INSERT INTO Items 
            (name, type_alcohol, domain_name, millesime, purchase_price, selling_price, stock_quantity, description, Id_Suppliers, Id_Orders)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            data.name,
            data.type_alcohol,
            data.domain_name,
            data.millesime,
            data.purchase_price,
            data.selling_price,
            data.stock_quantity,
            data.description,
            data.Id_Suppliers,
            data.Id_Orders,
        ];
        db.query(sql, values, callback);
    },

    // Mettre � jour un item par ID
    update: (id, data, callback) => {
        const sql = `
            UPDATE Items 
            SET 
                name = ?, 
                type_alcohol = ?, 
                domain_name = ?, 
                millesime = ?, 
                purchase_price = ?, 
                selling_price = ?, 
                stock_quantity = ?, 
                description = ?, 
                Id_Suppliers = ?, 
                Id_Orders = ?
            WHERE Id_Items = ?
        `;
        const values = [
            data.name,
            data.type_alcohol,
            data.domain_name,
            data.millesime,
            data.purchase_price,
            data.selling_price,
            data.stock_quantity,
            data.description,
            data.Id_Suppliers,
            data.Id_Orders,
            id,
        ];
        db.query(sql, values, callback);
    },

    // Supprimer un item par ID
    delete: (id, callback) => {
        const sql = 'DELETE FROM Items WHERE Id_Items = ?';
        db.query(sql, [id], callback);
    },
};

module.exports = Items;
