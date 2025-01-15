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

    sellUsers: (Id_items, quantity, Id_users, callback) => {
        // Récupérer le stock et le prix de vente
        db.query('SELECT stock_quantity, selling_price FROM items WHERE Id_items = ?', [Id_items], (err, result) => {
            if (err) return callback(err);

            // Vérification du stock
            const { stock_quantity, selling_price } = result[0];
            if (stock_quantity < quantity) {
                return callback(new Error('Stock insuffisant'));
            }

            // Mise à jour du stock
            db.query('UPDATE items SET stock_quantity = stock_quantity - ? WHERE Id_items = ?', [quantity, Id_items], (err) => {
                if (err) return callback(err);

                // Création de la commande
                db.query('INSERT INTO orders (order_date, Id_users) VALUES (NOW(), ?)', [Id_users], (err, orderResult) => {
                    if (err) return callback(err);

                    const orderId = orderResult.insertId;

                    // Enregistrement des détails de la commande avec le selling_price
                    db.query(
                        'INSERT INTO orders_users_details (quantity, price, Id_items, Id_orders) VALUES (?, ?, ?, ?)',
                        [quantity, selling_price, Id_items, orderId], // Utiliser selling_price ici
                        (err) => {
                            if (err) return callback(err);

                            callback(null, { message: 'Commande effectuée avec succès', orderId });
                        }
                    );
                });
            });
        });
    },

    addStocks: (Id_items, quantity, Id_suppliers, callback) => {
            // Récupérer le prix de vente
            db.query('SELECT stock_quantity, selling_price FROM items WHERE Id_items = ?', [Id_items], (err, result) => {
                if (err) return callback(err);
                // Garder en memooire la valeur de selling_price pour la re utiliser dans la derniere query
                const { selling_price } = result[0];

                // Mise à jour du stock
                db.query('UPDATE items SET stock_quantity = stock_quantity + ? WHERE Id_items = ?', [quantity, Id_items], (err) => {
                    if (err) return callback(err);

                    // Création de la commande
                    db.query('INSERT INTO orders_suppliers (order_date, Id_suppliers) VALUES (NOW(), ?)', [Id_suppliers], (err, orderResult) => {
                        if (err) return callback(err);

                        const orderId = orderResult.insertId;

                        // Enregistrement des détails de la commande avec le selling_price
                        db.query(
                            'INSERT INTO orders_suppliers_details (quantity, price, Id_items, Id_orders_suppliers) VALUES (?, ?, ?, ?)',
                            [quantity, selling_price, Id_items, orderId], // Utiliser selling_price ici
                            (err) => {
                                if (err) return callback(err);

                                callback(null, { message: 'Commande effectuée avec succès', orderId });
                            }
                        );
                    });
                });
            });
        },

};

module.exports = Items;