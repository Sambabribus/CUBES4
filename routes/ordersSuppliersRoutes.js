const express = require('express');
const OrdersSuppliersController = require('../controllers/ordersSuppliersController.js');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderSupplier:
 *       type: object
 *       properties:
 *         Id_orders_suppliers:
 *           type: integer
 *           description: ID unique de la commande fournisseur
 *         order_date:
 *           type: string
 *           format: date
 *           description: Date de la commande
 *         Id_suppliers:
 *           type: integer
 *           description: ID du fournisseur
 */

/**
 * @swagger
 * /api/orders-suppliers:
 *   get:
 *     summary: Récupère toutes les commandes fournisseurs
 *     tags: [Order Suppliers]
 *     responses:
 *       200:
 *         description: Liste des commandes fournisseurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderSupplier'
 *       500:
 *         description: Erreur serveur
 *   post:
 *     summary: Crée une nouvelle commande fournisseur
 *     tags: [Order Suppliers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderSupplier'
 *     responses:
 *       201:
 *         description: Commande fournisseur créée avec succès
 *       400:
 *         description: Requête invalide
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/orders-suppliers/{id}:
 *   get:
 *     summary: Récupère une commande fournisseur par ID
 *     tags: [Order Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la commande fournisseur
 *     responses:
 *       200:
 *         description: Détails de la commande fournisseur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderSupplier'
 *       404:
 *         description: Commande fournisseur non trouvée
 *       500:
 *         description: Erreur serveur
 *   put:
 *     summary: Met à jour une commande fournisseur par ID
 *     tags: [Order Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la commande fournisseur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderSupplier'
 *     responses:
 *       200:
 *         description: Commande fournisseur mise à jour avec succès
 *       400:
 *         description: Requête invalide
 *       404:
 *         description: Commande fournisseur non trouvée
 *       500:
 *         description: Erreur serveur
 *   delete:
 *     summary: Supprime une commande fournisseur par ID
 *     tags: [Order Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la commande fournisseur
 *     responses:
 *       200:
 *         description: Commande fournisseur supprimée avec succès
 *       404:
 *         description: Commande fournisseur non trouvée
 *       500:
 *         description: Erreur serveur
 */

router.post('/', OrdersSuppliersController.createOrderSupplier);
router.get('/', OrdersSuppliersController.getAllOrdersSuppliers);
router.get('/:id', OrdersSuppliersController.getOrderSupplierById);
router.put('/:id', OrdersSuppliersController.updateOrderSupplier);
router.delete('/:id', OrdersSuppliersController.deleteOrderSupplier);

module.exports = router;
