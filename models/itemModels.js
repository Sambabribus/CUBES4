const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemControllers');

// Récupérer tous les items
router.get('/', itemController.getAllItems);

// Récupérer un item par ID
router.get('/:id', itemController.getItemById);

// Ajouter un nouvel item
router.post('/', itemController.createItem);

// Mettre à jour un item par ID
router.put('/:id', itemController.updateItemById);

// Supprimer un item par ID
router.delete('/:id', itemController.deleteItemById);

module.exports = router;
