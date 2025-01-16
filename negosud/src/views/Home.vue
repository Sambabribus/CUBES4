<template>
    <div class="home-page">
        <!-- Section des Meilleures Ventes -->
        <section class="best-sellers">
            <h2>Nos Meilleures Ventes</h2>
            <div class="card" v-for="product in topProducts" :key="product.Id_items">
                <h3>{{ product?.name }}</h3>
                <p><strong>Prix :</strong> {{ product?.selling_price || 'N/A' }} &euro; TTC</p>
                <p>{{ product?.description || 'Pas de description disponible.' }}</p>
                <button @click="addToCart(product)">Ajouter au panier</button>
            </div>

        </section>

        <section class="about">
            <h2>À propos</h2>
            <div class="about-container">
                <img src="@/assets/left-image.jpeg" alt="Image gauche" class="about-image" />
                <p class="about-text">
                    Bienvenue chez NEGOSUD, votre partenaire privilégié pour découvrir les trésors viticoles de la Gascogne. Située au cœur de cette région riche en traditions et en saveurs, NEGOSUD est bien plus qu’un simple négociant en vin : c’est une passerelle vers l’excellence des produits du terroir.

                    Notre gérant, œnologue passionné et fin connaisseur, a mis à profit son expertise et ses relations avec les domaines viticoles pour créer un espace unique. L’entrepôt NEGOSUD a été pensé pour permettre aux amateurs de vin et aux curieux de déguster et d’acheter les meilleurs crus dans un cadre chaleureux, au cœur d’une région touristique prisée.

                    En collaboration avec des partenaires prestigieux tels que les domaines de Tariquet, Pellehaut, Joy, Vignoble Fontan, et Uby, NEGOSUD propose une expérience unique : la dégustation et la vente de l’ensemble de leurs productions. C’est une opportunité rare de découvrir des vins d’exception, directement issus des vignobles de Gascogne, tout en soutenant une approche locale et authentique.

                    Chez NEGOSUD, notre mission est de partager notre passion pour les vins de caractère et de qualité, en créant des moments de convivialité et de découverte. Que vous soyez connaisseur ou néophyte, nous serons ravis de vous accueillir et de vous faire découvrir la richesse de notre terroir.
                    À très bientôt chez NEGOSUD, où chaque bouteille raconte une histoire.
                </p>
                <img src="@/assets/right-image.jpg" alt="Image droite" class="about-image" />
            </div>
        </section>


        <!-- Section Produits Disponibles avec filtres -->
        <section class="available-products">
            <aside class="filters">
                <h3>Filtres</h3>
                <div class="filter-group">
                    <h4>Catégories de vins</h4>
                    <label><input type="checkbox" v-model="filters.colors" value="Vin rouge" /> Vin rouge</label>
                    <label><input type="checkbox" v-model="filters.colors" value="Vin blanc sec" /> Vin blanc sec</label>
                    <label><input type="checkbox" v-model="filters.colors" value="Vin blanc doux" /> Vin blanc doux</label>
                    <label><input type="checkbox" v-model="filters.colors" value="Vin rose" /> Vin rosé</label>
                    <label><input type="checkbox" v-model="filters.colors" value="Floc de Gascogne" /> Floc de Gascogne</label>
                    <label><input type="checkbox" v-model="filters.colors" value="Vin blanc moelleux" /> Vin blanc moelleux</label>
                    <label><input type="checkbox" v-model="filters.colors" value="Vin blanc fruite" /> Vin blanc fruité</label>
                    <label><input type="checkbox" v-model="filters.colors" value="Madiran" /> Madiran</label>
                    <label><input type="checkbox" v-model="filters.colors" value="Armagnac" /> Armagnac</label>
                </div>


                <div class="filter-group">
                    <h4>Fournisseur</h4>
                    <select v-model="filters.supplier">
                        <option value="">Tous les fournisseurs</option>
                        <option v-for="supplier in suppliers" :key="supplier.id" :value="supplier.name">
                            {{ supplier.name }}
                        </option>
                    </select>
                </div>

                <div class="filter-group">
                    <h4>Prix</h4>
                    <div class="price-inputs">
                        <input type="number"
                               v-model="filters.minPrice"
                               placeholder="Min (&euro;)"
                               min="0"
                               @input="validatePrice('minPrice')" />
                        <input type="number"
                               v-model="filters.maxPrice"
                               placeholder="Max (&euro;)"
                               min="0"
                               @input="validatePrice('maxPrice')" />
                    </div>

                </div>
            </aside>

            <main class="products">
                <h2>Produits Disponibles</h2>
                <div class="product-grid">
                    <div class="card" v-for="product in filteredProducts" :key="product.Id_items">
                        <h3>{{ product?.name }}</h3>
                        <p><strong>Prix :</strong> {{ product?.selling_price || 'N/A' }} &euro; TTC</p>
                        <p>{{ product?.description || 'Pas de description disponible.' }}</p>

                        <button @click="addToCart(product)">Ajouter au panier</button>
                    </div>

                </div>
            </main>
        </section>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Home",
        data() {
            return {
                topProducts: [],
                showFilters: false, // Variable pour gérer la visibilité des filtres
                products: [],
                suppliers: [],
                filters: {
                    colors: [],
                    supplier: "",
                    minPrice: "",
                    maxPrice: "",
                },
            };
        },
        computed: {
            filteredProducts() {
                // Fonction de normalisation
                const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

                return this.products.filter((product) => {
                    const alcoholType = product.alcohol_type || ""; // Vérifie que le type d'alcool est défini

                    // Normalisation des chaînes avant comparaison
                    const matchesColor =
                        this.filters.colors.length === 0 ||
                        this.filters.colors.some((filterCategory) =>
                            normalize(filterCategory) === normalize(alcoholType)
                        );

                    // Vérifie la correspondance des fournisseurs
                    const matchesSupplier =
                        !this.filters.supplier || product.domain_name === this.filters.supplier;

                    // Vérifie la correspondance des prix
                    const matchesPrice =
                        (!this.filters.minPrice || product.selling_price >= this.filters.minPrice) &&
                        (!this.filters.maxPrice || product.selling_price <= this.filters.maxPrice);

                    // Retourne les produits correspondant à tous les critères
                    return matchesColor && matchesSupplier && matchesPrice;
                });
            },
        },
        
        methods: {
            async fetchTopProducts() {
                const response = await axios.get("/api/items"); // Récupère tous les produits
                const allProducts = response.data;

                // Choisir aléatoirement 3 produits
                this.topProducts = allProducts.sort(() => 0.5 - Math.random()).slice(0, 3);
            },
            async fetchProducts() {
                const response = await axios.get("/api/items");
                this.products = response.data;
                console.log("Produits récupérés :", this.products); // Vérification
            },
            async fetchSuppliers() {
                try {
                    const response = await axios.get("/api/items"); // Récupère tous les produits
                    const allProducts = response.data;

                    // Extraire les valeurs uniques de `domain_name`
                    const uniqueSuppliers = [
                        ...new Set(allProducts.map((product) => product.domain_name))
                    ];

                    // Stocker les fournisseurs sous forme d'objets { id, name }
                    this.suppliers = uniqueSuppliers.map((supplier, index) => ({
                        id: index + 1, // Générer un ID fictif
                        name: supplier,
                    }));
                } catch (error) {
                    console.error("Erreur lors de la récupération des fournisseurs :", error);
                }
            },
            validatePrice(field) {
                if (this.filters[field] < 0) {
                    this.filters[field] = 0; // Remet à zéro si négatif
                }
            },
            applyFilters() {
                
            },
            addToCart(product) {
                this.$store.dispatch("addToCart", product); // Ajouter au panier via Vuex
                this.$router.push("/cart"); // Rediriger vers la page du panier
                alert(`${product.name} ajouté au panier !`);
            },
        },
        async mounted() {
            try {
                await this.fetchProducts();
                await this.fetchTopProducts();
                console.log("Produits chargés :", this.products); // Vérification des produits
            } catch (error) {
                console.error("Erreur lors du chargement des produits :", error);
            }
        }
    };
</script>
<style scoped>
    /* Conteneur principal */
    .home-page {
        display: flex;
        flex-direction: column;
        gap: 40px; /* Espacement entre sections */
        background-color: #f5f5f5;
        font-family: 'Arial', sans-serif;
    }

    /* Section des Meilleures Ventes */
    .best-sellers {
        padding: 20px;
    }

        .best-sellers h2 {
            text-align: center; /* Titre centré */
            color: #8B0000;
            margin-bottom: 20px;
        }

    .top-products {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 colonnes */
        gap: 20px;
        margin: 0 auto;
    }
    /* Section À propos */
    .about {
        display: flex;
        flex-direction: column; /* Dispose le titre au-dessus du contenu */
        gap: 20px; /* Espacement entre le titre et le contenu */
        padding: 20px;
        background-color: #fdf5e6; /* Fond couleur crème */
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Légère ombre */
        margin: 30px auto; /* Ajoute un espacement autour et centre horizontalement */
        max-width: 1200px; /* Limite la largeur */
        text-align: center;
    }

        .about h2 {
            text-align: center; /* Centre le texte horizontalement */
            color: #8B0000; /* Rouge bordeaux */
            margin: 0 auto; /* Supprime l'espace en haut */
        }

    .about-container {
        display: flex;
        align-items: center; /* Aligne verticalement les éléments */
        justify-content: space-between; /* Espace égal entre les colonnes */
        gap: 20px; /* Espacement entre les éléments */
        text-align: justify; /* Justifie le texte */
    }

    .about-text {
        font-size: 16px;
        color: #333;
        line-height: 1.6; /* Hauteur des lignes */
        flex: 1; /* Le texte prend tout l'espace disponible */
        padding: 0 20px; /* Espacement à gauche et à droite */
    }

    .about-image {
        width: 200px; /* Taille fixe des images */
        height: 200px; /* Taille fixe */
        border-radius: 10px; /* Coins arrondis */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Légère ombre */
        object-fit: cover; /* Maintient les proportions de l'image */
    }


    /* Section Produits Disponibles */
    .available-products {
        display: grid;
        grid-template-columns: 250px auto; /* Colonne pour filtres + produits */
        gap: 2%; /* Marge de 2% entre les filtres et les produits */
        padding: 20px;
    }

        .available-products h2 {
            grid-column: span 2; /* Le titre occupe toute la largeur */
            text-align: center; /* Titre centré */
            color: #8B0000;
            margin-bottom: 20px;
        }

    /* Sidebar des filtres */
    .filters {
        position: sticky; /* Rend le conteneur des filtres fixe lors du défilement */
        top: 10px;
        width: 250px;
        padding: 10px;
        margin-top: 90px;
        background-color: #f5f5f5;
        border-right: 1px solid #ddd;
        box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
        height: fit-content;
        border-radius: 10px;
    }

        .filters h3,
        .filters h4 {
            margin-bottom: 10px;
            color: #8B0000;
        }

        .filters label {
            display: block;
            margin-bottom: 5px;
            color: #555;
        }

        .filters input[type="checkbox"] {
            margin-right: 5px;
        }

    .price-inputs {
        display: flex;
        gap: 10px;
    }

        .price-inputs input {
            width: 50%;
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

    .filters button {
        background-color: #710101; /* Rouge */
        color: #ffffff; /* Blanc pour le texte */
        border: none;
        padding: 8px 16px; /* Taille du bouton */
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        transition: background-color 0.3s, transform 0.2s;
        margin-top: 15px; /* Décalage vers le bas */
    }

        .filters button:hover {
            background-color: #a20404; /* Rouge légèrement plus clair */
            transform: translateY(-2px); /* Animation au survol */
        }


    /* Grille pour les produits disponibles */
    .product-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 colonnes */
        gap: 20px;
    }

    /* Styles des cartes produits */
    .card {
        background-color: #ffffff;
        border: 2px solid #ddd;
        border-radius: 10px;
        padding: 10px;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s, box-shadow 0.2s;
    }

        .card:hover {
            transform: scale(1.02);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }

        .card h3 {
            font-size: 16px;
            color: #8B0000;
            margin: 10px 0;
        }

        .card p {
            font-size: 14px;
            color: #555;
        }

        .card button {
            background-color: #710101;
            color: #87824C;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            transition: background-color 0.3s, transform 0.2s;
        }

            .card button:hover {
                background-color: #a20404;
                transform: translateY(-2px);
            }
</style>
