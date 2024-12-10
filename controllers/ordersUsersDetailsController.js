const OrdersUsersDetailsModel = require('../models/ordersUsersDetailsModels');

// Créer un détail de commande utilisateur
const createOrderUserDetail = (req, res) => {
    const { quantity, price, Id_items, Id_orders } = req.body;

    if (!quantity || !price || !Id_items || !Id_orders) {
        return res.status(400).json({ error: 'Missing required fields: quantity, price, Id_items, or Id_orders' });
    }

    OrdersUsersDetailsModel.create(quantity, price, Id_items, Id_orders, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(201).json({ message: 'Order user detail created successfully', detailId: result });
        }
    });
};

// Récupérer tous les détails de commandes utilisateurs
const getAllOrderUserDetails = (req, res) => {
    OrdersUsersDetailsModel.findAll((error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json(result);
        }
    });
};

// Récupérer un détail de commande utilisateur par ID
const getOrderUserDetailById = (req, res) => {
    const { id } = req.params;

    OrdersUsersDetailsModel.findById(id, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else if (!result) {
            res.status(404).json({ error: 'Order user detail not found' });
        } else {
            res.json(result);
        }
    });
};

// Mettre à jour un détail de commande utilisateur
const updateOrderUserDetail = (req, res) => {
    const { id } = req.params;
    const { quantity, price, Id_items, Id_orders } = req.body;

    if (!quantity || !price || !Id_items || !Id_orders) {
        return res.status(400).json({ error: 'Missing required fields: quantity, price, Id_items, or Id_orders' });
    }

    OrdersUsersDetailsModel.update(id, quantity, price, Id_items, Id_orders, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else if (result === 0) {
            res.status(404).json({ error: 'Order user detail not found' });
        } else {
            res.json({ message: 'Order user detail updated successfully' });
        }
    });
};

// Supprimer un détail de commande utilisateur
const deleteOrderUserDetail = (req, res) => {
    const { id } = req.params;

    OrdersUsersDetailsModel.delete(id, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else if (result === 0) {
            res.status(404).json({ error: 'Order user detail not found' });
        } else {
            res.json({ message: 'Order user detail deleted successfully' });
        }
    });
};

module.exports = {
    createOrderUserDetail,
    getAllOrderUserDetails,
    getOrderUserDetailById,
    updateOrderUserDetail,
    deleteOrderUserDetail,
};

