import { createStore } from 'vuex';

const store = createStore({
    state: {
        cart: [], // Tableau contenant les articles du panier
    },
    getters: {
        cartItems: (state) => state.cart,
        cartTotalPrice: (state) =>
            state.cart.reduce(
                (total, item) => total + parseFloat(item.selling_price || 0) * item.quantity,
                0
            ),
    },
    mutations: {
        ADD_TO_CART(state, product) {
            // Recherche d'un article existant basé sur plusieurs critères
            const existingItem = state.cart.find(
                item =>
                    item.Id_items === product.Id_items && // Vérifiez l'ID
                    item.name === product.name // Ajoutez d'autres critères si nécessaire
            );

            if (existingItem) {
                // Si un article correspondant est trouvé, incrémentez la quantité
                existingItem.quantity += product.quantity || 1;
            } else {
                // Si aucun article correspondant n'est trouvé, ajoutez un nouvel article
                state.cart.push({
                    ...product,
                    quantity: product.quantity || 1,
                });
            }
        },
        REMOVE_FROM_CART(state, productId) {
            // Corrigez pour utiliser `Id_items` au lieu de `id`
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
    },
    actions: {
        addToCart({ commit }, product) {
            commit('ADD_TO_CART', product); // Ajoute un article au panier
        },
        removeFromCart({ commit }, productId) {
            commit('REMOVE_FROM_CART', productId); // Supprime un article
        },
        updateQuantity({ commit }, payload) {
            commit('UPDATE_QUANTITY', payload); // Met à jour la quantité
        },
        clearCart({ commit }) {
            commit('CLEAR_CART'); // Vide le panier
        },
    },
    methods: {
        addToCart(product) {
            this.$store.dispatch('addToCart', {
                Id_items: product.Id_items,
                name: product.name,
                selling_price: product.selling_price,
                quantity: 1,
                // Ajoutez ici d'autres attributs uniques si nécessaire
            });
        },
    },

});

export default store;
