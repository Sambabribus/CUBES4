const OrderModel = require('../models/ordersModels'); // Import du modèle des commandes

// Fonction pour créer une commande
const createOrder = (req, res) => {
    const { order_date, Id_users } = req.body; // Extraction des données nécessaires du corps de la requête

    // Vérifie que les champs requis sont présents
    if (!order_date || !Id_users) {
        return res.status(400).json({ error: 'Missing required fields: order_date or Id_users' }); // Retourne une erreur 400 si des champs sont manquants
    }

    // Appel à la méthode du modèle pour créer une commande
    OrderModel.create(order_date, Id_users, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message }); // Retourne une erreur 500 en cas de problème avec la base de données
        } else {
            res.status(201).json({ message: 'Order created successfully', orderId: result }); // Retourne une réponse 201 avec l'ID de la commande créée
        }
    });
};

// Fonction pour récupérer toutes les commandes
const getAllOrders = (req, res) => {
    // Appel à la méthode du modèle pour récupérer toutes les commandes
    OrderModel.findAll((error, result) => {
        if (error) {
            res.status(500).json({ error: error.message }); // Retourne une erreur 500 en cas de problème avec la base de données
        } else {
            res.json(result); // Retourne toutes les commandes sous forme de JSON
        }
    });
};

// Fonction pour récupérer une commande par son ID
const getOrderById = (req, res) => {
    const { id } = req.params; // Extraction de l'ID de la commande depuis les paramètres de la requête

    // Appel à la méthode du modèle pour récupérer une commande spécifique
    OrderModel.findById(id, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message }); // Retourne une erreur 500 en cas de problème avec la base de données
        } else if (!result) {
            res.status(404).json({ error: 'Order not found' }); // Retourne une erreur 404 si la commande n'est pas trouvée
        } else {
            res.json(result); // Retourne la commande sous forme de JSON
        }
    });
};

// Fonction pour mettre à jour une commande
const updateOrder = (req, res) => {
    const { id } = req.params; // Extraction de l'ID de la commande depuis les paramètres de la requête
    const { order_date, Id_users } = req.body; // Extraction des données nécessaires du corps de la requête

    // Vérifie que les champs requis sont présents
    if (!order_date || !Id_users) {
        return res.status(400).json({ error: 'Missing required fields: order_date or Id_users' }); // Retourne une erreur 400 si des champs sont manquants
    }

    // Appel à la méthode du modèle pour mettre à jour une commande
    OrderModel.update(id, order_date, Id_users, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message }); // Retourne une erreur 500 en cas de problème avec la base de données
        } else if (result === 0) {
            res.status(404).json({ error: 'Order not found' }); // Retourne une erreur 404 si aucune commande n'est mise à jour
        } else {
            res.json({ message: 'Order updated successfully' }); // Retourne une confirmation de la mise à jour
        }
    });
};

// Fonction pour supprimer une commande
const deleteOrder = (req, res) => {
    const { id } = req.params; // Extraction de l'ID de la commande depuis les paramètres de la requête

    // Appel à la méthode du modèle pour supprimer une commande
    OrderModel.delete(id, (error, result) => {
        if (error) {
            res.status(500).json({ error: error.message }); // Retourne une erreur 500 en cas de problème avec la base de données
        } else if (result === 0) {
            res.status(404).json({ error: 'Order not found' }); // Retourne une erreur 404 si aucune commande n'est supprimée
        } else {
            res.json({ message: 'Order deleted successfully' }); // Retourne une confirmation de la suppression
        }
    });
};

// Exporte toutes les fonctions du contrôleur
module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};
