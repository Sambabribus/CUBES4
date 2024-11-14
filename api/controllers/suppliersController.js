const Suppliers = require('../models/suppliersModel');

exports.createSupplier = (req, res) => {
    Suppliers.create(req.body, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la création du fournisseur');
        }
        res.status(201).send({ id: result.insertId, message: 'Fournisseur créé avec succès' });
    });
};

exports.getAllSuppliers = (req, res) => {
    Suppliers.findAll((err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la récupération des fournisseurs');
        }
        res.status(200).send(results);
    });
};

exports.getSupplierById = (req, res) => {
    Suppliers.findById(req.params.id, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la récupération du fournisseur');
        }
        if (results.length === 0) {
            return res.status(404).send('Fournisseur non trouvé');
        }
        res.status(200).send(results[0]);
    });
};

exports.updateSupplier = (req, res) => {
    Suppliers.update(req.params.id, req.body, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la mise à jour du fournisseur');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Fournisseur non trouvé');
        }
        res.status(200).send('Fournisseur mis à jour avec succès');
    });
};

exports.deleteSupplier = (req, res) => {
    Suppliers.delete(req.params.id, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la suppression du fournisseur');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Fournisseur non trouvé');
        }
        res.status(200).send('Fournisseur supprimé avec succès');
    });
};
