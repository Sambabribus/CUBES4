<template>
    <div class="cart-page">
        <h1>Mon Panier</h1>
        <!-- Vérifie si le panier contient des articles -->
        <div v-if="cartItems.length > 0">
            <div class="cart-item" v-for="item in cartItems" :key="item.Id_items">
                <h3>{{ item.name }}</h3>
                <p>Prix unitaire : {{ parseFloat(item.selling_price || 0).toFixed(2) }} € TTC</p>
                <p>Sous-total : {{ (parseFloat(item.selling_price || 0) * item.quantity).toFixed(2) }} € TTC</p>
                <div class="quantity-control">
                    <button @click="updateQuantity({ productId: item.Id_items, newQuantity: item.quantity - 1 })" :disabled="item.quantity === 1">-</button>
                    <span>{{ item.quantity }}</span>
                    <button @click="updateQuantity({ productId: item.Id_items, newQuantity: item.quantity + 1 })">+</button>
                </div>
                <button @click="removeFromCart(item.Id_items)" class="remove-btn">Retirer</button>
            </div>
            <!-- Total général -->
            <h2>Total : {{ cartTotalPrice.toFixed(2) }} € TTC</h2>
            <button class="checkout-btn" @click="goToCheckout">Valider ma commande</button>
        </div>
        <div v-else>
            <p>Votre panier est vide.</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        computed: {
            ...mapGetters(["cartItems", "cartTotalPrice", "isAuthenticated"]), // Récupère les articles, le total et l'état d'authentification
        },
        methods: {
            ...mapActions(["updateQuantity", "removeFromCart", "addToCart"]), // Actions Vuex existantes
            goToCheckout() {
                // Vérifie si l'utilisateur est connecté
                if (!this.isAuthenticated) {
                    alert("Veuillez vous connecter pour valider votre commande.");
                    this.$router.push("/login"); // Redirige vers la page de connexion
                    return;
                }

                // Vérifie si le panier est vide
                if (this.cartItems.length === 0) {
                    alert("Votre panier est vide.");
                    return;
                }

                // Redirige vers la page de validation de commande
                this.$router.push("/checkout");
            },
        },
    };
</script>

<style scoped>
    .cart-page {
        padding: 20px;
        background-color: #f9f9f9;
    }

    .cart-item {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #fff;
    }

    .quantity-control {
        display: flex;
        align-items: center;
        gap: 10px;
    }

        .quantity-control button {
            background-color: #710101;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
        }

            .quantity-control button:hover {
                background-color: #a71d2a;
            }

    .remove-btn {
        background-color: #710101;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }

        .remove-btn:hover {
            background-color: #a71d2a;
        }

    .checkout-btn {
        background-color: #710101;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

        .checkout-btn:hover {
            background-color: #a71d2a;
        }
</style>
