const OrderModel = require('../models/OrdersModel'); // Import du modèle

class OrdersController {
    // Créer une commande
    static async createOrder(req, res) {
        const { order_date, quantity, Id_Users } = req.body;
        try {
            const orderId = await OrderModel.create(order_date, quantity, Id_Users);
            res.status(201).json({ message: 'Order created successfully', orderId });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to create order' });
        }
    }

    // Récupérer toutes les commandes
    static async getAllOrders(req, res) {
        try {
            const orders = await OrderModel.findAll();
            res.json(orders);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch orders' });
        }
    }

    // Récupérer une commande par son ID
    static async getOrderById(req, res) {
        const { id } = req.params;
        try {
            const order = await OrderModel.findById(id);
            if (!order) {
                return res.status(404).json({ error: 'Order not found' });
            }
            res.json(order);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch order' });
        }
    }

    // Mettre à jour une commande
    static async updateOrder(req, res) {
        const { id } = req.params;
        const { order_date, quantity, Id_Users } = req.body;
        try {
            const rowsUpdated = await OrderModel.update(id, order_date, quantity, Id_Users);
            if (rowsUpdated === 0) {
                return res.status(404).json({ error: 'Order not found' });
            }
            res.json({ message: 'Order updated successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to update order' });
        }
    }

    // Supprimer une commande
    static async deleteOrder(req, res) {
        const { id } = req.params;
        try {
            const rowsDeleted = await OrderModel.delete(id);
            if (rowsDeleted === 0) {
                return res.status(404).json({ error: 'Order not found' });
            }
            res.json({ message: 'Order deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete order' });
        }
    }
}

module.exports = OrdersController;
