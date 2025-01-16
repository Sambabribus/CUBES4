import { createStore } from 'vuex';
import { signupUser } from "../services/api";

const store = createStore({
    state: {
        cart: [], // Tableau contenant les articles du panier
        user: null, // Stocke l'utilisateur connect�
    },
    getters: {
        cartItems: (state) => state.cart,
        cartTotalPrice: (state) =>
            state.cart.reduce(
                (total, item) => total + parseFloat(item.selling_price || 0) * item.quantity,
                0
            ),
        isAuthenticated: (state) => !!state.user, // V�rifie si l'utilisateur est connect�
    },
    mutations: {
        ADD_TO_CART(state, product) {
            // Recherche d'un article existant bas� sur plusieurs crit�res
            const existingItem = state.cart.find(
                item =>
                    item.Id_items === product.Id_items && // V�rifiez l'ID
                    item.name === product.name // Ajoutez d'autres crit�res si n�cessaire
            );

            if (existingItem) {
                // Si un article correspondant est trouv�, incr�mentez la quantit�
                existingItem.quantity += product.quantity || 1;
            } else {
                // Si aucun article correspondant n'est trouv�, ajoutez un nouvel article
                state.cart.push({
                    ...product,
                    quantity: product.quantity || 1,
                });
            }
        },
        REMOVE_FROM_CART(state, productId) {
            // Corrigez pour utiliser `Id_items` au lieu de `id`
            state.cart = state.cart.filter((item) => item.Id_items !== product.Id_items);
        },
        UPDATE_QUANTITY(state, { productId, newQuantity }) {
            const product = state.cart.find((item) => item.Id_items === product.Id_items);
            if (product) {
                product.quantity = newQuantity > 0 ? newQuantity : 1; // Minimum 1
            }
        },
        CLEAR_CART(state) {
            state.cart = []; // Vide le panier
        },
        SET_USER(state, user) {
            state.user = user;
        },
    },
    actions: {
        addToCart({ commit }, product) {
            commit('ADD_TO_CART', product); // Ajoute un article au panier
        },
        removeFromCart({ commit }, productId) {
            commit('REMOVE_FROM_CART', productId); // Supprime un article
        },
        updateQuantity({ commit }, payload) {
            commit('UPDATE_QUANTITY', payload); // Met � jour la quantit�
        },
        clearCart({ commit }) {
            commit('CLEAR_CART'); // Vide le panier
        },
        async login({ commit }, { email, password }) {
            // Remplacez ceci par une requ�te vers votre backend
            if (email === "test@example.com" && password === "password123") {
                commit("SET_USER", { email }); // Simule une connexion r�ussie
                return true;
            }
            return false;
        },
        async signup({ commit }, userData) {
            try {
                const response = await signupUser(userData); // Appel de la m�thode dans api.js
                console.log('Utilisateur cr�� avec succ�s :', response);
                return true; // Succ�s
            } catch (error) {
                console.error('Erreur lors de l\'inscription :', error.response?.data || error.message);
                alert('Erreur lors de l\'inscription. Veuillez r�essayer.');
                return false; // �chec
            }
        },
    },
    methods: {
        addToCart(product) {
            this.$store.dispatch('addToCart', {
                Id_items: product.Id_items,
                name: product.name,
                selling_price: product.selling_price,
                quantity: 1,
                // Ajoutez ici d'autres attributs uniques si n�cessaire
            });
        },
    },
});

export default store;
