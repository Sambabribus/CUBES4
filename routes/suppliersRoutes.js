const express = require('express');
const router = express.Router();
const suppliersController = require('../controllers/suppliersController');

router.post('/', suppliersController.createSupplier);
router.get('/', suppliersController.getAllSuppliers);
router.get('/:id', suppliersController.getSupplierById);
router.put('/:id', suppliersController.updateSupplier);
router.delete('/:id', suppliersController.deleteSupplier);

module.exports = router;
//a