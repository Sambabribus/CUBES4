const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemControllers');

// R�cup�rer tous les items
router.get('/', itemController.getAllItems);

// R�cup�rer un item par ID
router.get('/:id', itemController.getItemById);

// Ajouter un nouvel item
router.post('/', itemController.createItem);

// Mettre � jour un item par ID
router.put('/:id', itemController.updateItemById);

// Supprimer un item par ID
router.delete('/:id', itemController.deleteItemById);

module.exports = router;
