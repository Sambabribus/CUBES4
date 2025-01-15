const express = require('express');
const router = express.Router();
const ItemsController = require('../controllers/itemsController'); // Chemin correct vers le contrôleur


/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       properties:
 *         Id_items:
 *           type: integer
 *           description: ID unique de l'item
 *         name:
 *           type: string
 *           description: Nom de l'item
 *         alcohol_type:
 *           type: string
 *           description: Type d'alcool
 *         domain_name:
 *           type: string
 *           description: Nom du domaine
 *         millesime:
 *           type: integer
 *           description: Millésime de l'item
 *         purchase_price:
 *           type: number
 *           description: Prix d'achat
 *         selling_price:
 *           type: number
 *           description: Prix de vente
 *         stock_quantity:
 *           type: integer
 *           description: Quantité en stock
 *         description:
 *           type: string
 *           description: Description de l'item
 */

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Récupère tous les items
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: Une liste d'items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 *       500:
 *         description: Erreur serveur
 *   post:
 *     summary: Crée un nouvel item
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: Item créé avec succès
 *       400:
 *         description: Requête invalide
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Récupère un item par ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'item
 *     responses:
 *       200:
 *         description: Détails de l'item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Item non trouvé
 *       500:
 *         description: Erreur serveur
 *   put:
 *     summary: Met à jour un item par ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: Item mis à jour avec succès
 *       400:
 *         description: Requête invalide
 *       404:
 *         description: Item non trouvé
 *       500:
 *         description: Erreur serveur
 *   delete:
 *     summary: Supprime un item par ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'item
 *     responses:
 *       200:
 *         description: Item supprimé avec succès
 *       404:
 *         description: Item non trouvé
 *       500:
 *         description: Erreur serveur
 */

router.post('/', ItemsController.createItem);
router.get('/', ItemsController.getAllItems);
router.get('/:id', ItemsController.getItemById);
router.put('/:id', ItemsController.updateItem);
router.delete('/:id', ItemsController.deleteItem);
router.post('/sell', ItemsController.sellUsers);
router.post('/add', ItemsController.addStocks);

module.exports = router;