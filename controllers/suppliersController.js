const Suppliers = require('../models/SuppliersModel');

exports.createSupplier = async (req, res) => {
    try {
        const result = await Suppliers.create(req.body);
        res.status(201).send({ id: result.insertId, message: 'Fournisseur créé avec succès' });
    } catch (err) {
        console.error('Erreur lors de la création du fournisseur :', err);
        res.status(500).send('Erreur lors de la création du fournisseur');
    }
};

exports.getAllSuppliers = async (req, res) => {
    try {
        const results = await Suppliers.findAll();
        res.status(200).send(results);
    } catch (err) {
        console.error('Erreur lors de la récupération des fournisseurs :', err);
        res.status(500).send('Erreur lors de la récupération des fournisseurs');
    }
};

exports.getSupplierById = async (req, res) => {
    try {
        const results = await Suppliers.findById(req.params.id);
        if (results.length === 0) {
            return res.status(404).send('Fournisseur non trouvé');
        }
        res.status(200).send(results[0]);
    } catch (err) {
        console.error('Erreur lors de la récupération du fournisseur :', err);
        res.status(500).send('Erreur lors de la récupération du fournisseur');
    }
};

exports.updateSupplier = async (req, res) => {
    try {
        const result = await Suppliers.update(req.params.id, req.body);
        if (result.affectedRows === 0) {
            return res.status(404).send('Fournisseur non trouvé');
        }
        res.status(200).send('Fournisseur mis à jour avec succès');
    } catch (err) {
        console.error('Erreur lors de la mise à jour du fournisseur :', err);
        res.status(500).send('Erreur lors de la mise à jour du fournisseur');
    }
};

exports.deleteSupplier = async (req, res) => {
    try {
        const result = await Suppliers.delete(req.params.id);
        if (result.affectedRows === 0) {
            return res.status(404).send('Fournisseur non trouvé');
        }
        res.status(200).send('Fournisseur supprimé avec succès');
    } catch (err) {
        console.error('Erreur lors de la suppression du fournisseur :', err);
        res.status(500).send('Erreur lors de la suppression du fournisseur');
    }
};
//a