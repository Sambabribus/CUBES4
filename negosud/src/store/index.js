import apiClient from "@/services/api";
import { createStore } from "vuex";
import { signupUser } from "../services/api";

const store = createStore({
    state: {
        cart: [], // Tableau contenant les articles du panier
        user: null, // Contient les informations utilisateur (id_users, username, isAdmin)
        token: null, // Contient le token JWT
    },
    getters: {
        cartItems: (state) => state.cart,
        cartTotalPrice: (state) =>
            state.cart.reduce(
                (total, item) =>
                    total + parseFloat(item.selling_price || 0) * item.quantity,
                0
            ),
        isAuthenticated: (state) => !!state.token, // V�rifie si l'utilisateur est authentifi�
        userId: (state) => state.user?.id_users, // R�cup�re l'ID utilisateur
    },
    mutations: {
        ADD_TO_CART(state, product) {
            const existingItem = state.cart.find(
                (item) =>
                    item.Id_items === product.Id_items && // V�rifiez l'ID
                    item.name === product.name // Ajoutez d'autres crit�res si n�cessaire
            );

            if (existingItem) {
                existingItem.quantity += product.quantity || 1; // Si un article correspondant est trouv�, incr�mentez la quantit�
            } else {
                state.cart.push({
                    ...product,
                    quantity: product.quantity || 1,
                }); // Sinon ajoutez l'article
            }
        },
        REMOVE_FROM_CART(state, productId) {
            state.cart = state.cart.filter((item) => item.Id_items !== productId);
        },
        UPDATE_QUANTITY(state, { productId, newQuantity }) {
            const product = state.cart.find((item) => item.Id_items === productId);
            if (product) {
                product.quantity = newQuantity > 0 ? newQuantity : 1; // Minimum 1
            }
        },
        CLEAR_CART(state) {
            state.cart = []; // Vide le panier
        },
        SET_USER(state, { token, id_users, username, isAdmin }) {
            state.user = { id_users, username, isAdmin }; // Stocke les informations utilisateur
            state.token = token; // Stocke le token JWT

            // Persiste les informations utilisateur
            localStorage.setItem(
                "user",
                JSON.stringify({ id_users, username, isAdmin })
            );
            localStorage.setItem("token", token);
        },
        LOGOUT(state) {
            state.user = null;
            state.token = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        },
    },
    actions: {
        addToCart({ commit }, product) {
            commit("ADD_TO_CART", product); // Ajoute un article au panier
        },
        removeFromCart({ commit }, productId) {
            commit("REMOVE_FROM_CART", productId); // Supprime un article
        },
        updateQuantity({ commit }, payload) {
            commit("UPDATE_QUANTITY", payload); // Met � jour la quantit�
        },
        clearCart({ commit }) {
            commit("CLEAR_CART"); // Vide le panier
        },
        restoreUser({ commit }) {
            const user = JSON.parse(localStorage.getItem("user"));
            const token = localStorage.getItem("token");

            if (user && token) {
                commit("SET_USER", { ...user, token });
            }
        },
        async login({ commit }, { username, password }) {
            console.log("Tentative de connexion avec :", { username, password }); // V�rifie les donn�es envoy�es

            try {
                console.log("Tentative de connexion avec :", { username, password }); // V�rifie les donn�es envoy�es
                const response = await apiClient.post("/users/login", {
                    username,
                    password,
                });

                // Ajoute un log pour voir la r�ponse compl�te du backend
                console.log("R�ponse API login :", response.data);

                const { token, id_users, isAdmin } = response.data;

                // Stocke les informations utilisateur
                commit("SET_USER", { token, id_users, username, isAdmin });

                return true;
            } catch (error) {
                console.error(
                    "Erreur de connexion :",
                    error.response?.data || error.message
                );
                return false;
            }
        },
        async signup({ commit }, userData) {
            try {
                const response = await signupUser(userData);
                console.log("Utilisateur cr�� avec succ�s :", response);
                return true;
            } catch (error) {
                console.error(
                    "Erreur lors de l'inscription :",
                    error.response?.data || error.message
                );
                alert("Erreur lors de l'inscription. Veuillez r�essayer.");
                return false;
            }
        },
        logout({ commit }) {
            console.log("Action LOGOUT");
            commit("LOGOUT");
        },
        async placeOrder({ commit }, orderData) {
            try {
                const response = await apiClient.post("/orders", orderData);
                console.log("Commande valid�e :", response.data);
                return true;
            } catch (error) {
                console.error(
                    "Erreur lors de l'envoi de la commande :",
                    error.response?.data || error.message
                );
                return false;
            }
        },
    },
});

export default store;
