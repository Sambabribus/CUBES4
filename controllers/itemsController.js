const Items = require('../models/itemsModels');

// Créer un nouvel item
exports.createItem = (req, res) => {
    Items.create(req.body, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la création de l\'item');
        }
        res.status(201).send({ id: result.insertId, message: 'Item créé avec succès' });
    });
};

// Récupérer tous les items
exports.getAllItems = (req, res) => {
    Items.findAll((err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la récupération des items');
        }
        res.status(200).send(results);
    });
};

// Récupérer un item par ID
exports.getItemById = (req, res) => {
    Items.findById(req.params.id, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la récupération de l\'item');
        }
        if (results.length === 0) {
            return res.status(404).send('Item non trouvé');
        }
        res.status(200).send(results[0]);
    });
};

// Mettre à jour un item par ID
exports.updateItem = (req, res) => {
    Items.update(req.params.id, req.body, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la mise à jour de l\'item');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Item non trouvé');
        }
        res.status(200).send('Item mis à jour avec succès');
    });
};

exports.deleteItem = (req, res) => {
    Items.delete(req.params.id, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la suppression de l\'item');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Item non trouvé');
        }
        res.status(200).send('Item supprimé avec succès');
    });
};
exports.getAllItems = (req, res) => {
    Items.findAll((err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la récupération des items');
        }
        res.status(200).send(results); // Renvoie les résultats sous forme de JSON
    });
};