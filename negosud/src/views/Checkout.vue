<template>
    <div class="checkout-page">
        <h1>Validation de commande</h1>

        <!-- Récapitulatif des articles -->
        <div v-if="cartItems.length > 0">
            <h2>Votre panier</h2>
            <div v-for="item in cartItems" :key="item.id" class="cart-item">
                <h3>{{ item.name }}</h3>
                <p>Prix : {{ item.selling_price }} &euro; TTC</p>
                <p>Quantité : {{ item.quantity }}</p>
                <p>Sous-total : {{ item.selling_price * item.quantity }} &euro;</p>
            </div>
        </div>
        <div v-else>
            <p>Votre panier est vide.</p>
        </div>

        <!-- Formulaire d'informations -->
        <div class="checkout-form" v-if="cartItems.length > 0">
            <h2>Informations de livraison</h2>
            <form @submit.prevent="submitOrder">
                <label for="name">Nom complet :</label>
                <input type="text" id="name" v-model="customer.name" required />

                <label for="address">Adresse :</label>
                <input type="text" id="address" v-model="customer.address" required />

                <label for="payment">Mode de paiement :</label>
                <select id="payment" v-model="customer.paymentMethod">
                    <option value="credit-card">Carte bancaire</option>
                    <option value="paypal">PayPal</option>
                </select>

                <button type="submit">Valider la commande</button>
            </form>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
    name: "Checkout",
    setup() {
        const store = useStore();

        const cartItems = computed(() => store.state.cart || []); // Articles du panier
        const customer = {
            name: "",
            address: "",
            paymentMethod: "credit-card", // Mode de paiement par défaut
        };

        const submitOrder = () => {
            if (!cartItems.value.length) {
                alert("Votre panier est vide.");
                return;
            }

            // Logique pour valider la commande
            console.log("Commande soumise :", {
                cart: cartItems.value,
                customer,
            });
            alert("Merci pour votre commande !");
        };

        return {
            cartItems,
            customer,
            submitOrder,
        };
    },
};
</script>

<style scoped>
    .checkout-page {
        padding: 20px;
    }

    .cart-item {
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #fff;
    }

    .checkout-form {
        margin-top: 30px;
    }

    form label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }

    form input,
    form select {
        width: 100%;
        padding: 8px;
        margin-bottom: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    form button {
        background-color: #8B0000;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
    }

        form button:hover {
            background-color: #a20404;
        }
</style>
