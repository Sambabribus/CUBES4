const express = require('express');
const router = express.Router();
const suppliersController = require('../controllers/suppliersController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Supplier:
 *       type: object
 *       properties:
 *         Id_suppliers:
 *           type: integer
 *           description: ID unique du fournisseur
 *         name:
 *           type: string
 *           description: Nom du fournisseur
 *         address:
 *           type: string
 *           description: Adresse du fournisseur
 *         phone_number:
 *           type: string
 *           description: Numéro de téléphone
 *         mail:
 *           type: string
 *           description: Adresse email
 *         region:
 *           type: string
 *           description: Région du fournisseur
 *         alcohol_provided:
 *           type: string
 *           description: Type d'alcool fourni
 */

/**
 * @swagger
 * /api/suppliers:
 *   get:
 *     summary: Récupère tous les fournisseurs
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: Liste des fournisseurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Supplier'
 *       500:
 *         description: Erreur serveur
 *   post:
 *     summary: Crée un nouveau fournisseur
 *     tags: [Suppliers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Supplier'
 *     responses:
 *       201:
 *         description: Fournisseur créé avec succès
 *       400:
 *         description: Requête invalide
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/suppliers/{id}:
 *   get:
 *     summary: Récupère un fournisseur par ID
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du fournisseur
 *     responses:
 *       200:
 *         description: Détails du fournisseur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Supplier'
 *       404:
 *         description: Fournisseur non trouvé
 *       500:
 *         description: Erreur serveur
 *   put:
 *     summary: Met à jour un fournisseur par ID
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du fournisseur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Supplier'
 *     responses:
 *       200:
 *         description: Fournisseur mis à jour avec succès
 *       400:
 *         description: Requête invalide
 *       404:
 *         description: Fournisseur non trouvé
 *       500:
 *         description: Erreur serveur
 *   delete:
 *     summary: Supprime un fournisseur par ID
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du fournisseur
 *     responses:
 *       200:
 *         description: Fournisseur supprimé avec succès
 *       404:
 *         description: Fournisseur non trouvé
 *       500:
 *         description: Erreur serveur
 */

router.post('/', suppliersController.createSupplier);
router.get('/', suppliersController.getAllSuppliers);
router.get('/:id', suppliersController.getSupplierById);
router.put('/:id', suppliersController.updateSupplier);
router.delete('/:id', suppliersController.deleteSupplier);

module.exports = router;