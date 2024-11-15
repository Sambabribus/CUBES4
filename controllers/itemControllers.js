const itemModel = require('../models/ItemModels');

// Récupérer tous les items
exports.getAllItems = (req, res) => {
    itemModel.getAllItems((err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la récupération des items' });
        } else {
            res.status(200).json(result);
        }
    });
};

// Récupérer un item par ID
exports.getItemById = (req, res) => {
    const itemId = req.params.id;
    itemModel.getItemById(itemId, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la récupération de l\'item' });
        } else if (!result) {
            res.status(404).json({ message: 'Item non trouvé' });
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
                res.status(500).json({ error: `Erreur lors de la création de l'item : ${err.message}` });
            } else {
                res.status(201).json({ message: 'Item créé avec succès', id: result.insertId });
            }
        }
    );
};

// Mettre à jour un item par ID
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
        return res.status(400).json({ error: 'Tous les champs sont obligatoires pour la mise à jour' });
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
                res.status(500).json({ error: `Erreur lors de la mise à jour de l'item : ${err.message}` });
            } else if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Item non trouvé' });
            } else {
                res.status(200).json({ message: `Item avec l'ID ${itemId} mis à jour` });
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
            res.status(404).json({ message: 'Item non trouvé' });
        } else {
            res.status(200).json({ message: `Item avec l'ID ${itemId} supprimé` });
        }
    });
};
