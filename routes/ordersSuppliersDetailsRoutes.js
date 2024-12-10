const express = require('express');
const OrdersSuppliersDetailsController = require('../controllers/ordersSuppliersDetailsController.js');

const router = express.Router();

router.post('/', OrdersSuppliersDetailsController.createOrderSupplierDetail);
router.get('/', OrdersSuppliersDetailsController.getAllOrderSupplierDetails);
router.get('/:id', OrdersSuppliersDetailsController.getOrderSupplierDetailById);
router.put('/:id', OrdersSuppliersDetailsController.updateOrderSupplierDetail);
router.delete('/:id', OrdersSuppliersDetailsController.deleteOrderSupplierDetail);

module.exports = router;
