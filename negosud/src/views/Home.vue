<template>
    <div>

        <h2>Nos Meilleures ventes</h2>
        <div class="top-products">
            <div class="card" v-for="product in topProducts" :key="product.id">
                <img :src="product.image" alt="Image produit" />
                <h3>{{ product.name }}</h3>
                <p>{{ product.selling_price }}€ TTC</p>
                <button @click="addToCart(product)">Ajouter au panier</button>
            </div>
        </div>

        <h2>Produits disponibles</h2>
        <div class="filters">
            <select v-model="selectedSupplier" @change="fetchProducts">
                <option value="">Tous les fournisseurs</option>
                <option v-for="supplier in suppliers" :key="supplier.id" :value="supplier.id">
                    {{ supplier.name }}
                </option>
            </select>
        </div>

        <div class="products">
            <div class="card" v-for="product in products" :key="product.id">
                <img :src="product.image" alt="Image produit" />
                <h3>{{ product.name }}</h3>
                <p>{{ product.selling_price }}€ TTC</p>
                <button @click="addToCart(product)">Ajouter au panier</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";


    export default {
        name: "Home",

        data() {
            return {
                topProducts: [],
                products: [],
                suppliers: [],
                selectedSupplier: "",
            };
        },
        methods: {
            async fetchTopProducts() {
                const response = await axios.get("/api/items?top=true");
                this.topProducts = response.data;
            },
            async fetchProducts() {
                const response = await axios.get("/api/items", {
                    params: { supplierId: this.selectedSupplier },
                });
                this.products = response.data;
            },
            async fetchSuppliers() {
                const response = await axios.get("/api/suppliers");
                this.suppliers = response.data;
            },
            addToCart(product) {
                axios.post("/api/cart", {
                    userId: 1,
                    itemId: product.id,
                    quantity: 1,
                });
                alert(`${product.name} ajouté au panier !`);
            },
        },
        async mounted() {
            await this.fetchTopProducts();
            await this.fetchProducts();
            await this.fetchSuppliers();
        },
    };
</script>

<style scoped>
    /* Style global */
    body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f9f9f9;
    }

    h2 {
        text-align: center;
        margin: 20px 0;
        color: #8B0000; /* Rouge foncé élégant */
    }

    /* Style pour le Navbar */
    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #333; /* Fond sombre */
        color: white;
        padding: 15px;
    }

        nav ul {
            list-style: none;
            display: flex;
            gap: 20px;
            margin: 0;
            padding: 0;
        }

        nav a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s;
        }

            nav a:hover {
                color: #FFD700; /* Doré */
            }

    /* Section des meilleurs produits */
    .top-products {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 20px auto;
        max-width: 1200px;
    }

        .top-products .card {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 250px;
            text-align: center;
        }

        .top-products img {
            max-width: 100%;
            height: 150px;
            object-fit: cover;
        }

        .top-products h3 {
            color: #8B0000;
            margin: 10px 0;
        }

        .top-products p {
            color: #555;
        }

        .top-products button {
            background-color: #8B0000;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            margin-bottom: 10px;
            transition: background-color 0.3s;
        }

            .top-products button:hover {
                background-color: #A52A2A; /* Rouge légèrement plus clair */
            }

    /* Filtres */
    .filters {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 20px auto;
        max-width: 800px;
    }

        .filters select {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 14px;
            color: #333;
            cursor: pointer;
        }

    /* Liste des produits */
    .products {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin: 20px auto;
        max-width: 1200px;
    }

        .products .card {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .products img {
            max-width: 100%;
            height: 150px;
            object-fit: cover;
        }

        .products h3 {
            color: #8B0000;
            margin: 10px 0;
        }

        .products p {
            color: #555;
        }

        .products button {
            background-color: #8B0000;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            margin-bottom: 10px;
            transition: background-color 0.3s;
        }

            .products button:hover {
                background-color: #A52A2A;
            }
</style>
