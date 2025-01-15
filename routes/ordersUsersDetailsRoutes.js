const express = require('express');
const OrdersUsersDetailsController = require('../controllers/ordersUsersDetailsController.js');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderUserDetail:
 *       type: object
 *       properties:
 *         Id_orders_users_details:
 *           type: integer
 *           description: ID unique du détail de la commande utilisateur
 *         quantity:
 *           type: integer
 *           description: Quantité de l'article
 *         price:
 *           type: number
 *           description: Prix de l'article
 *         Id_items:
 *           type: integer
 *           description: ID de l'article
 *         Id_orders:
 *           type: integer
 *           description: ID de la commande utilisateur
 */

/**
 * @swagger
 * /api/orders-users-details:
 *   get:
 *     summary: Récupère tous les détails de commandes utilisateurs
 *     tags: [Order User Details]
 *     responses:
 *       200:
 *         description: Liste des détails des commandes utilisateurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderUserDetail'
 *       500:
 *         description: Erreur serveur
 *   post:
 *     summary: Crée un nouveau détail de commande utilisateur
 *     tags: [Order User Details]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderUserDetail'
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
 * /api/orders-users-details/{id}:
 *   get:
 *     summary: Récupère un détail de commande utilisateur par ID
 *     tags: [Order User Details]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du détail de commande utilisateur
 *     responses:
 *       200:
 *         description: Détail de la commande utilisateur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderUserDetail'
 *       404:
 *         description: Détail non trouvé
 *       500:
 *         description: Erreur serveur
 *   put:
 *     summary: Met à jour un détail de commande utilisateur par ID
 *     tags: [Order User Details]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du détail de commande utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderUserDetail'
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
 *     summary: Supprime un détail de commande utilisateur par ID
 *     tags: [Order User Details]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du détail de commande utilisateur
 *     responses:
 *       200:
 *         description: Détail supprimé avec succès
 *       404:
 *         description: Détail non trouvé
 *       500:
 *         description: Erreur serveur
 */

router.post('/', OrdersUsersDetailsController.createOrderUserDetail);
router.get('/', OrdersUsersDetailsController.getAllOrderUserDetails);
router.get('/:id', OrdersUsersDetailsController.getOrderUserDetailById);
router.put('/:id', OrdersUsersDetailsController.updateOrderUserDetail);
router.delete('/:id', OrdersUsersDetailsController.deleteOrderUserDetail);

module.exports = router;
