const express = require('express');
const router = express.Router();
const itemModel = require('../Models/ItemModels');

//R�cuperer tous les items
router.get('/', (req, res) => {
    itemModel.getAllItems((err, result) => {
        if (err) {
            res.status(500).json({ error: 'Erreur lors de la r�cuperation des items' });
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
            res.status(500).json({ error: 'Erreur lotrs de la r�cuperation de l\'item' });
        } else if (!result) {
            res.status(404).json({ message: 'Item non trouv�' });
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
                res.status(500).json({ error: `Erreur lors de la cr�ation de l'item : ${err.message}` });
            } else {
                res.status(201).json({ message: 'Item cr�� avec succ�s', id: result.insertId });
            }
        }
    );
});

// Mettre � jour un item par ID
router.put('/:id', (req, res) => {
    const itemId = req.params.id; // ID de l'item � mettre � jour
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
    } = req.body; // Donn�es envoy�es dans la requ�te

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
});


// Supprimer un item par ID
router.delete('/:id', (req, res) => {
    const itemId = req.params.id; // R�cup�re l'ID depuis l'URL

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
});

module.exports = router;