const express = require('express');
const OrdersController = require('../controllers/ordersController.js');

const router = express.Router();

router.post('/', OrdersController.createOrder);
router.get('/', OrdersController.getAllOrders);
router.get('/:id', OrdersController.getOrderById);
router.put('/:id', OrdersController.updateOrder);
router.delete('/:id', OrdersController.deleteOrder);

module.exports = router;