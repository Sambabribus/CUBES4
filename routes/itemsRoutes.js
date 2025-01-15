const express = require('express');
const router = express.Router();
const ItemsController = require('../controllers/itemsController'); // Chemin correct vers le contrôleur

router.post('/', ItemsController.createItem);
router.get('/', ItemsController.getAllItems);
router.get('/:id', ItemsController.getItemById);
router.put('/:id', ItemsController.updateItem);
router.delete('/:id', ItemsController.deleteItem);
router.post('/sell', ItemsController.sellUsers);

module.exports = router;