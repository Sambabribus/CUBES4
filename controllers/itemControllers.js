const itemModel = require('../models/ItemModels');

// R�cup�rer tous les items
exports.getAllItems = (req, res) => {
    itemModel.getAllItems((err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la r�cup�ration des items' });
        } else {
            res.status(200).json(result);
        }
    });
};

// R�cup�rer un item par ID
exports.getItemById = (req, res) => {
    const itemId = req.params.id;
    itemModel.getItemById(itemId, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la r�cup�ration de l\'item' });
        } else if (!result) {
            res.status(404).json({ message: 'Item non trouv�' });
        } else {
            res.status(200).json(result);
        }
    });
};

// Ajouter un nouvel item
exports.createItem = (req, res) => {
    const { name, type_alcohol, domain_name, millesime, purchase_price, selling_price, stock_quantity, description, Id_Suppliers, Id_Orders } = req.body;

    if (!name || !type_alcohol || !domain_name || !millesime || !purchase_price || !selling_price || !stock_quantity || !description || !Id_Suppliers || !Id_Orders) {
        return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
    }

    itemModel.createItem(
        { name, type_alcohol, domain_name, millesime, purchase_price, selling_price, stock_quantity, description, Id_Suppliers, Id_Orders },
        (err, result) => {
            if (err) {
                res.status(500).json({ error: `Erreur lors de la cr�ation de l'item : ${err.message}` });
            } else {
                res.status(201).json({ message: 'Item cr�� avec succ�s', id: result.insertId });
            }
        }
    );
};

// Mettre � jour un item par ID
exports.updateItemById = (req, res) => {
    const itemId = req.params.id;
    const {
        name,
        type_alcohol,
        domain_name,
        millesime,
        purchase_price,
        selling_price,
        stock_quantity,
        description,
        Id_Suppliers,
        Id_Orders
    } = req.body;

    if (!name || !type_alcohol || !domain_name || !millesime || !purchase_price || !selling_price || !stock_quantity || !description || !Id_Suppliers || !Id_Orders) {
        return res.status(400).json({ error: 'Tous les champs sont obligatoires pour la mise � jour' });
    }

    itemModel.updateItemById(
        itemId,
        {
            name,
            type_alcohol,
            domain_name,
            millesime,
            purchase_price,
            selling_price,
            stock_quantity,
            description,
            Id_Suppliers,
            Id_Orders
        },
        (err, result) => {
            if (err) {
                res.status(500).json({ error: `Erreur lors de la mise � jour de l'item : ${err.message}` });
            } else if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Item non trouv�' });
            } else {
                res.status(200).json({ message: `Item avec l'ID ${itemId} mis � jour` });
            }
        }
    );
};

// Supprimer un item par ID
exports.deleteItemById = (req, res) => {
    const itemId = req.params.id;

    if (isNaN(itemId)) {
        return res.status(400).json({ error: 'ID invalide' });
    }

    itemModel.deleteItemById(itemId, (err, result) => {
        if (err) {
            res.status(500).json({ error: `Erreur lors de la suppression de l'item : ${err.message}` });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Item non trouv�' });
        } else {
            res.status(200).json({ message: `Item avec l'ID ${itemId} supprim�` });
        }
    });
};
