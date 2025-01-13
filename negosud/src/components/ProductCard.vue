<template>
    <div class="product-card">
        <img : src="public.image" alt="Produit" class="img-fluid mb-3" />
        <h5>{{ product.name}} </h5>
        <p class="text-muted">{{ product.price}}€ TTC</p>
        <p><strong>Cépages</strong>: {{product.cepage}}</p>
        <p><strong>En Bref</strong>: {{product.description}}</p>
        <button @click="addToCart(product.id)" class="btn btn-primary"> Ajouter au panier</button>
    </div>
</template>

<script>
    import { addToCart } from "@/services/api";
    export default {
        props: {
            product: Object
        },
        methods: {
            async addToCart(productId) {
                try {
                    await addToCart(productId, 1);
                    alert("Produit ajouté au panier !");
                } catch (error) {
                    console.error(error);
                    alert("Une erreurest survenue.");
                }
            }
        }
    };
</script>

<style scoped>
    .product-card h5 {
        font-size: 18px;
        color: #333;
    }

    .product-card p {
        font-size: 14px;
        color: #555;
    }
     .product-card {
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 15px;
        background-color: #f9f9f9;
        text-align: center;
    }

        .product-card img {
            max-height: 150px;
            margin-bottom: 10px;
        }
</style>