const express = require('express');
const router = express.Router();
const itemModel = require('../Models/ItemModels');

//Récuperer tous les items
router.get('/', (req, res) => {
    itemModel.getAllItems((err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la récuperation des items' });
        } else {
            res.status(200).json(result);
        }
    });
});

//Recupere un item par ID
router.get('/:id', (req, res) => {
    const itemId = req.params.id;
    itemModel.getItemById(itemId, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lotrs de la récuperation de l\'item' });
        } else if (!result) {
            res.status(404).json({ message: 'Item non trouvé' });
        } else {
            res.status(200).json(result);
        }
    })
});

// ajouter un nouvel item
router.post('/', (req, res) => {
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
});

// Mettre à jour un item par ID
router.put('/:id', (req, res) => {
    const itemId = req.params.id; // ID de l'item à mettre à jour
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
    } = req.body; // Données envoyées dans la requête

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
});


// Supprimer un item par ID
router.delete('/:id', (req, res) => {
    const itemId = req.params.id; // Récupère l'ID depuis l'URL

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
});

module.exports = router;