const express = require('express');
const OrdersController = require('../controllers/ordersController.js');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         Id_orders:
 *           type: integer
 *           description: ID unique de la commande
 *         order_date:
 *           type: string
 *           format: date
 *           description: Date de la commande
 *         Id_users:
 *           type: integer
 *           description: ID de l'utilisateur ayant passé la commande
 */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Récupère toutes les commandes
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Liste des commandes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       500:
 *         description: Erreur serveur
 *   post:
 *     summary: Crée une nouvelle commande
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Commande créée avec succès
 *       400:
 *         description: Requête invalide
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Récupère une commande par ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la commande
 *     responses:
 *       200:
 *         description: Détails de la commande
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Commande non trouvée
 *       500:
 *         description: Erreur serveur
 *   put:
 *     summary: Met à jour une commande par ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la commande
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Commande mise à jour avec succès
 *       400:
 *         description: Requête invalide
 *       404:
 *         description: Commande non trouvée
 *       500:
 *         description: Erreur serveur
 *   delete:
 *     summary: Supprime une commande par ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la commande
 *     responses:
 *       200:
 *         description: Commande supprimée avec succès
 *       404:
 *         description: Commande non trouvée
 *       500:
 *         description: Erreur serveur
 */

router.post('/', OrdersController.createOrder);
router.get('/', OrdersController.getAllOrders);
router.get('/:id', OrdersController.getOrderById);
router.put('/:id', OrdersController.updateOrder);
router.delete('/:id', OrdersController.deleteOrder);

module.exports = router;