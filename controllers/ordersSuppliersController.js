const OrdersSuppliersModel = require('../models/ordersSuppliersModels');

// Créer une commande fournisseur
const createOrderSupplier = (req, res) => {
    const { order_date, Id_suppliers } = req.body;

    if (!order_date || !Id_suppliers) {
        return res.status(400).json({ error: 'Missing required fields: order_date or Id_suppliers' });
    }

    OrdersSuppliersModel.create(order_date, Id_suppliers, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(201).json({ message: 'Order supplier created successfully', orderSupplierId: result });
        }
    });
};

// Récupérer toutes les commandes fournisseurs
const getAllOrdersSuppliers = (req, res) => {
    OrdersSuppliersModel.findAll((error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json(result);
        }
    });
};

// Récupérer une commande fournisseur par ID
const getOrderSupplierById = (req, res) => {
    const { id } = req.params;

    OrdersSuppliersModel.findById(id, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else if (!result) {
            res.status(404).json({ error: 'Order supplier not found' });
        } else {
            res.json(result);
        }
    });
};

// Mettre à jour une commande fournisseur
const updateOrderSupplier = (req, res) => {
    const { id } = req.params;
    const { order_date, Id_suppliers } = req.body;

    if (!order_date || !Id_suppliers) {
        return res.status(400).json({ error: 'Missing required fields: order_date or Id_suppliers' });
    }

    OrdersSuppliersModel.update(id, order_date, Id_suppliers, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else if (result === 0) {
            res.status(404).json({ error: 'Order supplier not found' });
        } else {
            res.json({ message: 'Order supplier updated successfully' });
        }
    });
};

// Supprimer une commande fournisseur
const deleteOrderSupplier = (req, res) => {
    const { id } = req.params;

    OrdersSuppliersModel.delete(id, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else if (result === 0) {
            res.status(404).json({ error: 'Order supplier not found' });
        } else {
            res.json({ message: 'Order supplier deleted successfully' });
        }
    });
};

module.exports = {
    createOrderSupplier,
    getAllOrdersSuppliers,
    getOrderSupplierById,
    updateOrderSupplier,
    deleteOrderSupplier,
};
