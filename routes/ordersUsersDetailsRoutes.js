const express = require('express');
const OrdersUsersDetailsController = require('../controllers/ordersUsersDetailsController.js');

const router = express.Router();

router.post('/', OrdersUsersDetailsController.createOrderUserDetail);
router.get('/', OrdersUsersDetailsController.getAllOrderUserDetails);
router.get('/:id', OrdersUsersDetailsController.getOrderUserDetailById);
router.put('/:id', OrdersUsersDetailsController.updateOrderUserDetail);
router.delete('/:id', OrdersUsersDetailsController.deleteOrderUserDetail);

module.exports = router;
