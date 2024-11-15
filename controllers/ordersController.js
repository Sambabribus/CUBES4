const OrderModel = require('../models/OrdersModels'); // Import du modèle

const createOrder = (req, res) => {
    const { order_date, quantity, Id_Users } = req.body;
    OrderModel.create(order_date, quantity, Id_Users, (error, result) => {
        if (error) {
            res.status(500).json(error.message);
        } else {
            res.status(201).json({ message: 'Order created successfully', orderId: result });
        }
    });
};

const getAllOrders = (req, res) => {
    OrderModel.findAll((error, result) => {
        if (error) {
            res.status(500).json(error.message);
        } else {
            res.json(result);
        }
    });
};

const getOrderById = (req, res) => {
    const { id } = req.params;
    OrderModel.findById(id, (error, result) => {
        if (error) {
            res.status(500).json(error.message);
        } else if (!result) {
            res.status(404).json({ error: 'Order not found' });
        } else {
            res.json(result);
        }
    });
};

const updateOrder = (req, res) => {
    const { id } = req.params;
    const { order_date, quantity, Id_Users } = req.body;
    OrderModel.update(id, order_date, quantity, Id_Users, (error, result) => {
        if (error) {
            res.status(500).json(error.message);
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Order not found' });
        } else {
            res.json({ message: 'Order updated successfully' });
        }
    });
};

const deleteOrder = (req, res) => {
    const { id } = req.params;
    OrderModel.delete(id, (error, result) => {
        if (error) {
            res.status(500).json(error.message);
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Order not found' });
        } else {
            res.json({ message: 'Order deleted successfully' });
        }
    });
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};
