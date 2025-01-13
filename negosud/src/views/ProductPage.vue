<script>
    import { mockProducts } from "@/services/mockData";

    export default {
        name: "ProductPage",
        data() {
            return {
                product: null,
            };
        },
        methods: {
            async fetchProduct() {
                if (process.env.VUE_APP_USE_MOCK === "true") {
                    this.product = mockProducts[0]; // Produit fictif
                } else {
                    // Exemple d'appel API réel
                    console.log("Chargement réel du produit...");
                }
            },
        },
        mounted() {
            this.fetchProduct();
        },
    };
</script>

<template>
    <div v-if="product">
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <img :src="product.image" alt="Image du produit" />
    </div>
</template>


<style scoped>
    .card {
        border: 1px solid #ddd;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
    }

        .card img {
            height: 200px;
            object-fit: cover;
        }

    .card-body {
        text-align: center;
    }

    .btn-primary {
        background-color: #a10000;
        border: none;
    }
</style>
