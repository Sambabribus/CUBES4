const express = require('express');
const OrdersSuppliersDetailsController = require('../controllers/ordersSuppliersDetailsController.js');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderSupplierDetail:
 *       type: object
 *       properties:
 *         Id_orders_suppliers_details:
 *           type: integer
 *           description: ID unique du détail de la commande fournisseur
 *         quantity:
 *           type: integer
 *           description: Quantité de l'article
 *         price:
 *           type: number
 *           description: Prix de l'article
 *         Id_orders_suppliers:
 *           type: integer
 *           description: ID de la commande fournisseur
 *         Id_items:
 *           type: integer
 *           description: ID de l'article
 */

/**
 * @swagger
 * /api/orders-suppliers-details:
 *   get:
 *     summary: Récupère tous les détails de commandes fournisseurs
 *     tags: [Order Supplier Details]
 *     responses:
 *       200:
 *         description: Liste des détails des commandes fournisseurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderSupplierDetail'
 *       500:
 *         description: Erreur serveur
 *   post:
 *     summary: Crée un nouveau détail de commande fournisseur
 *     tags: [Order Supplier Details]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderSupplierDetail'
 *     responses:
 *       201:
 *         description: Détail créé avec succès
 *       400:
 *         description: Requête invalide
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/orders-suppliers-details/{id}:
 *   get:
 *     summary: Récupère un détail de commande fournisseur par ID
 *     tags: [Order Supplier Details]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du détail de commande fournisseur
 *     responses:
 *       200:
 *         description: Détail de la commande fournisseur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderSupplierDetail'
 *       404:
 *         description: Détail non trouvé
 *       500:
 *         description: Erreur serveur
 *   put:
 *     summary: Met à jour un détail de commande fournisseur par ID
 *     tags: [Order Supplier Details]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du détail de commande fournisseur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderSupplierDetail'
 *     responses:
 *       200:
 *         description: Détail mis à jour avec succès
 *       400:
 *         description: Requête invalide
 *       404:
 *         description: Détail non trouvé
 *       500:
 *         description: Erreur serveur
 *   delete:
 *     summary: Supprime un détail de commande fournisseur par ID
 *     tags: [Order Supplier Details]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du détail de commande fournisseur
 *     responses:
 *       200:
 *         description: Détail supprimé avec succès
 *       404:
 *         description: Détail non trouvé
 *       500:
 *         description: Erreur serveur
 */

router.post('/', OrdersSuppliersDetailsController.createOrderSupplierDetail);
router.get('/', OrdersSuppliersDetailsController.getAllOrderSupplierDetails);
router.get('/:id', OrdersSuppliersDetailsController.getOrderSupplierDetailById);
router.put('/:id', OrdersSuppliersDetailsController.updateOrderSupplierDetail);
router.delete('/:id', OrdersSuppliersDetailsController.deleteOrderSupplierDetail);

module.exports = router;
