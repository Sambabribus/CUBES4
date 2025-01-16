import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL || 'http://localhost:3000/api';

// Configuration du client Axios
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Connexion utilisateur
export const loginUser = async (email, password) => {
    const response = await apiClient.post('/users/login', { email, password });
    return response.data; // Contient le token et les infos utilisateur
};

// Récupérer les commandes utilisateur
export const getUserOrders = async (token) => {
    const response = await apiClient.get('/orders/user', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Liste des commandes
};

// Récupérer tous les produits
export const getProducts = async () => {
    try {
        const response = await apiClient.get('/items'); // Appel relatif

        return response.data; // Retourne les produits
    } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
        throw error;
    }
};

// Ajouter un produit au panier
export const addToCart = async (Id_items, quantity) => {
    try {
        const response = await apiClient.post('/cart', { Id_items, quantity });
        return response.data; // Confirme l'ajout
    } catch (error) {
        console.error("Erreur lors de l'ajout au panier :", error);
        throw error;
    }
};

// Passer une commande
export const placeOrder = async (orderData) => {
    try {
        const response = await apiClient.post('/orders', orderData);
        return response.data; // Détails de la commande
    } catch (error) {
        console.error('Erreur lors de la commande :', error);
        throw error; // Propager l'erreur si nécessaire
    }
};

// Inscription utilisateur
export const signupUser = async (userData) => {
    try {
        const response = await apiClient.post('/users/signup', userData);
        return response.data; // Contient les infos de l'utilisateur créé
    } catch (error) {
        console.error('Erreur lors de l\'inscription :', error.response?.data || error.message);
        throw error; // Propager l'erreur pour une gestion ultérieure
    }
};

// Mise à jour des informations utilisateur
export const updateUser = async (userId, userData) => {
    try {
        const response = await apiClient.put(`/users/${userId}`, userData);
        return response.data; // Contient les infos mises à jour de l'utilisateur
    } catch (error) {
        console.error('Erreur lors de la mise à jour des informations utilisateur :', error);
        throw error;
    }
};

// Supprimer un produit du panier
export const removeFromCart = async (Id_items) => {
    try {
        const response = await apiClient.delete(`/cart/${Id_items}`);
        return response.data; // Confirme la suppression
    } catch (error) {
        console.error('Erreur lors de la suppression du produit du panier :', error);
        throw error;
    }
};

export default apiClient;
