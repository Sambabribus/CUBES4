<template>
    
    <div class="container my-5">
        <h2 class="text-center mb-4">Nos Meilleurs Ventes</h2>
        <div class="row">
            <div class="col-md-4" v-for="product in topProducts" :key="product.id">
                <div class="card">
                    <img :src="product.image" class="card-img-top" alt="Image produit">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text"><strong>Prix :</strong> {{ product.price }} TTC</p>
                        <p class="card-text"><strong>CÉPAGES :</strong> {{ product.cepages }}</p>
                        <p class="card-text">{{ product.description }}</p>
                        <button class="btn btn-primary" @click="addToCart(product.id)">Ajouter au panier</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getProducts } from "@/services/api";
    import { mockProducts } from "@/services/mockData"; // Importation des données fictives
    import Navbar from "@/components/Navbar.vue";

    export default {
        name: "Home",
        data() {
            return {
                topProducts: [], // Liste pour stocker les 3 produits
            };
        },
        methods: {
            async fetchTopProducts() {
                try {
                    if (process.env.VUE_APP_USE_MOCK === "true") {
                        // Utilise les données fictives si le mode mock est activé
                        this.topProducts = mockProducts;
                    } else {
                        const products = await getProducts();
                        // Récupère seulement les 3 premiers produits
                        this.topProducts = products.slice(0, 3);
                    }
                } catch (error) {
                    console.error("Erreur lors de la récupération des produits :", error);
                    // Par défaut, utilise les données fictives en cas d'erreur
                    this.topProducts = mockProducts;
                }
            },
            addToCart(productId) {
                alert(`Produit ${productId} ajouté au panier !`);
            },
        },
        mounted() {
            this.fetchTopProducts(); // Récupère les produits dès le montage du composant
        },
        components: {
            Navbar,
        },
    };

</script>

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
