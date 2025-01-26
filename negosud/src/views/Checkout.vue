<template>
    <div class="checkout-page">
        <h1>Validation de commande</h1>

        <!-- Récapitulatif des articles -->
        <div v-if="cartItems.length > 0">
            <h2>Votre panier</h2>
            <div v-for="item in cartItems" :key="item.Id_items" class="cart-item">
                <h3>{{ item.name }}</h3>
                <p>Prix : {{ item.selling_price }} &euro; TTC</p>
                <p>Quantité : {{ item.quantity }}</p>
                <p>Sous-total : {{ (item.selling_price * item.quantity).toFixed(2) }} &euro;</p>
            </div>
            <button @click="submitOrder" class="submit-button">Valider la commande</button>
        </div>
        <div v-else>
            <p>Votre panier est vide.</p>
        </div>
    </div>
</template>

<script>
    import { computed } from "vue";
    import { useStore } from "vuex";
    import apiClient from "../services/api"; // Import de l'API client

   export default {
        name: "Checkout",
            setup() {
            const store = useStore();
            const cartItems = computed(() => store.state.cart || []);
            const user = computed(() => store.state.user); // Récupérer l'utilisateur connecté
                

                const submitOrder = async () => {
                    try {
                        if (!cartItems.value.length) {
                            alert("Votre panier est vide.");
                            return;
                        }

                        if (!user.value || !user.value.id_users) {
                            console.log("Utilisateur connecté :", user.value);
                            alert("Vous devez être connecté pour valider une commande.");
                            return;
                        }

                        // Convertir la date au format compatible MySQL
                        const formatDateForMySQL = (date) => {
                            const d = new Date(date);
                            const year = d.getFullYear();
                            const month = String(d.getMonth() + 1).padStart(2, "0");
                            const day = String(d.getDate()).padStart(2, "0");
                            const hours = String(d.getHours()).padStart(2, "0");
                            const minutes = String(d.getMinutes()).padStart(2, "0");
                            const seconds = String(d.getSeconds()).padStart(2, "0");
                            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
                        };

                        const orderDate = formatDateForMySQL(new Date());


                        // Préparer les données
                        const payload = {
                            cartItems: cartItems.value,
                            Id_users: user.value.id_users || user.value.id, // ID utilisateur connecté
                            order_date: orderDate,// Ajouter la date de commande
                        };

                        console.log("Payload envoyé :", payload); // Log pour vérifier les données avant l'envoi

                        // Envoyer les données au backend
                        const response = await apiClient.post("/orders", payload);
                        console.log("Commande validée :", response.data);

                        alert("Votre commande a été enregistrée !");
                        store.dispatch("clearCart"); // Vider le panier après validation
                    } catch (error) {
                        console.error("Erreur lors de la validation de la commande :", error.response?.data || error.message);
                        alert("Erreur lors de la validation de votre commande.");
                    }
                };

            return {
                cartItems,
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

    .submit-button {
        background-color: #8B0000;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
    }

        .submit-button:hover {
            background-color: #a20404;
        }
</style>
