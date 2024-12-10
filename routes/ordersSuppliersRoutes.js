const express = require('express');
const OrdersSuppliersController = require('../controllers/ordersSuppliersController.js');

const router = express.Router();

router.post('/', OrdersSuppliersController.createOrderSupplier);
router.get('/', OrdersSuppliersController.getAllOrdersSuppliers);
router.get('/:id', OrdersSuppliersController.getOrderSupplierById);
router.put('/:id', OrdersSuppliersController.updateOrderSupplier);
router.delete('/:id', OrdersSuppliersController.deleteOrderSupplier);

module.exports = router;
