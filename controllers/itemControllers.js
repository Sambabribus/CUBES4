const Items = require('../models/itemModels');

// Cr�er un nouvel item
exports.createItem = (req, res) => {
    Items.create(req.body, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la cr�ation de l\'item');
        }
        res.status(201).send({ id: result.insertId, message: 'Item cr�� avec succ�s' });
    });
};

// R�cup�rer tous les items
exports.getAllItems = (req, res) => {
    Items.findAll((err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la r�cup�ration des items');
        }
        res.status(200).send(results);
    });
};

// R�cup�rer un item par ID
exports.getItemById = (req, res) => {
    Items.findById(req.params.id, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la r�cup�ration de l\'item');
        }
        if (results.length === 0) {
            return res.status(404).send('Item non trouv�');
        }
        res.status(200).send(results[0]);
    });
};

// Mettre � jour un item par ID
exports.updateItem = (req, res) => {
    Items.update(req.params.id, req.body, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la mise � jour de l\'item');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Item non trouv�');
        }
        res.status(200).send('Item mis � jour avec succ�s');
    });
};

exports.deleteItem = (req, res) => {
    Items.delete(req.params.id, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la suppression de l\'item');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Item non trouv�');
        }
        res.status(200).send('Item supprim� avec succ�s');
    });
};
exports.getAllItems = (req, res) => {
    Items.findAll((err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la r�cup�ration des items');
        }
        res.status(200).send(results); // Renvoie les r�sultats sous forme de JSON
    });
};


