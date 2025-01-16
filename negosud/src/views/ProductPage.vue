<template>
    <div v-if="product" class="product-page">
        <h1>{{ product.name }}</h1>
        <img :src="product.image" alt="Image du produit" />
        <p>{{ product.description }}</p>
        <p><strong>Prix : </strong>{{ product.selling_price }} &euro; TTC</p>

        <div class="quantity-control">
            <label for="quantity">Quantité :</label>
            <input type="number"
                   id="quantity"
                   v-model.number="quantity"
                   min="1"
                   @input="quantity = Math.max(1, quantity)" />
        </div>

        <button @click="addProductToCart" class="btn-primary">
            Ajouter au panier
        </button>
    </div>
</template>


<script>
    import { mapActions } from "vuex";

    export default {
        name: "ProductPage",
        data() {
            return {
                product: null, // Produit chargé
                quantity: 1, // Quantité sélectionnée
            };
        },
        methods: {
            ...mapActions(["addToCart"]), // Action Vuex pour ajouter au panier
            async fetchProduct() {
                if (process.env.VUE_APP_USE_MOCK === "true") {
                    this.product = mockProducts[0]; // Produit fictif
                } else {
                    // Exemple d'appel API réel
                    console.log("Chargement réel du produit...");
                }
            },
            addProductToCart() {
                if (this.quantity > 0) {
                    this.addToCart({
                        id: this.product.id,
                        name: this.product.name,
                        selling_price: this.product.selling_price,
                        quantity: this.quantity,
                    });
                    alert(`${this.product.name} a été ajouté au panier.`);
                } else {
                    alert("Veuillez sélectionner une quantité valide.");
                }
            },
        },
        mounted() {
            this.fetchProduct();
        },
    };
</script>

<style scoped>
    .product-page {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

        .product-page img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
            margin-bottom: 20px;
        }

    .quantity-control {
        margin: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

        .quantity-control label {
            font-weight: bold;
        }

        .quantity-control input {
            width: 60px;
            padding: 5px;
            text-align: center;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

    .btn-primary {
        background-color: #a10000;
        color: #fff;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

        .btn-primary:hover {
            background-color: #8b0000;
        }
</style>

