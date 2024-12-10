const OrdersSuppliersDetailsModel = require('../models/ordersSuppliersDetailsModels');

// Créer un détail de commande fournisseur
const createOrderSupplierDetail = (req, res) => {
    const { quantity, price, Id_orders_suppliers, Id_items } = req.body;

    if (!quantity || !price || !Id_orders_suppliers || !Id_items) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    OrdersSuppliersDetailsModel.create(quantity, price, Id_orders_suppliers, Id_items, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(201).json({ message: 'Order supplier detail created successfully', detailId: result });
        }
    });
};

// Récupérer tous les détails de commandes fournisseurs
const getAllOrderSupplierDetails = (req, res) => {
    OrdersSuppliersDetailsModel.findAll((error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json(result);
        }
    });
};

// Récupérer un détail par ID
const getOrderSupplierDetailById = (req, res) => {
    const { id } = req.params;

    OrdersSuppliersDetailsModel.findById(id, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else if (!result) {
            res.status(404).json({ error: 'Order supplier detail not found' });
        } else {
            res.json(result);
        }
    });
};

// Mettre à jour un détail de commande fournisseur
const updateOrderSupplierDetail = (req, res) => {
    const { id } = req.params;
    const { quantity, price, Id_orders_suppliers, Id_items } = req.body;

    if (!quantity || !price || !Id_orders_suppliers || !Id_items) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    OrdersSuppliersDetailsModel.update(id, quantity, price, Id_orders_suppliers, Id_items, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else if (result === 0) {
            res.status(404).json({ error: 'Order supplier detail not found' });
        } else {
            res.json({ message: 'Order supplier detail updated successfully' });
        }
    });
};

// Supprimer un détail de commande fournisseur
const deleteOrderSupplierDetail = (req, res) => {
    const { id } = req.params;

    OrdersSuppliersDetailsModel.delete(id, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else if (result === 0) {
            res.status(404).json({ error: 'Order supplier detail not found' });
        } else {
            res.json({ message: 'Order supplier detail deleted successfully' });
        }
    });
};

module.exports = {
    createOrderSupplierDetail,
    getAllOrderSupplierDetails,
    getOrderSupplierDetailById,
    updateOrderSupplierDetail,
    deleteOrderSupplierDetail,
};
