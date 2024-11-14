const express = require('express');
const router = express.Router();
const db = require('./config/db');

router.post('/', (req, res) => {
    const { name, adresses, phone_number, mail, region, alcohol_provided } = req.body;

    if (!name || !adresses || !phone_number || !mail || !region) {
        return res.status(400).send('Tous les champs obligatoires doivent être remplis');
    }

    const sql = 'INSERT INTO Suppliers (name, adresses, phone_number, mail, region, alcohol_provided) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, adresses, phone_number, mail, region, alcohol_provided], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la création du fournisseur');
        }
        res.status(201).send({ id: result.insertId, message: 'Fournisseur créé avec succès' });
    });
});

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM Suppliers';
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la récupération des fournisseurs');
        }
        res.status(200).send(results);
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'SELECT * FROM Suppliers WHERE Id_Suppliers = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la récupération du fournisseur');
        }
        if (results.length === 0) {
            return res.status(404).send('Fournisseur non trouvé');
        }
        res.status(200).send(results[0]);
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, adresses, phone_number, mail, region, alcohol_provided } = req.body;

    if (!name || !adresses || !phone_number || !mail || !region) {
        return res.status(400).send('Tous les champs obligatoires doivent être remplis');
    }

    const sql = 'UPDATE Suppliers SET name = ?, adresses = ?, phone_number = ?, mail = ?, region = ?, alcohol_provided = ? WHERE Id_Suppliers = ?';
    db.query(sql, [name, adresses, phone_number, mail, region, alcohol_provided, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la mise à jour du fournisseur');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Fournisseur non trouvé');
        }
        res.status(200).send('Fournisseur mis à jour avec succès');
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM Suppliers WHERE Id_Suppliers = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la suppression du fournisseur');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Fournisseur non trouvé');
        }
        res.status(200).send('Fournisseur supprimé avec succès');
    });
});

module.exports = router;
