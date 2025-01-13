import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Connexion utilisateur
export const loginUser = async (email, password) => {
    const response = await axios.post(`${API_URL}/users/login`, { email, password });
    return response.data; // Contient le token et les infos utilisateur
};

// Récupérer les commandes utilisateur
export const getUserOrders = async (token) => {
    const response = await axios.get(`${API_URL}/orders/user`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Liste des commandes
};

//Récupérer tous les produits
export const getProducts = async () => {
    try {
        const response = await apiClient.get('/products');
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
        throw error;
    }

};

// ajouter un produit au panier
export const addToCart = async (productId, quantity) => {
    try {
        const response = await apiClient.post('/cart', { productId, quantity });
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'ajouter au panier :", error);
        throw error;
    }
};

//Passer une commande
export const placeOrder = async (orderData) => {
    try {
        const response = await apiClient.post('/orders', orderData);
        return response1.data;
    }
};

export default apiClient;