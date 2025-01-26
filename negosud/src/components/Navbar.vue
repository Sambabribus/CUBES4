<template>
    <nav>
        <!-- Logo à gauche -->
        <img src="@/assets/logo.png" alt="Logo" class="logo" />

        <!-- Liens centrés -->
        <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/products">Produits</router-link></li>
            <li><router-link to="/profile">Profil</router-link></li>
        </ul>

        <!-- Bouton Connexion/Déconnexion -->
        <button @click="handleAuthAction">
            {{ isAuthenticated ? 'Déconnexion' : 'Connexion' }}
        </button>

        <!-- Accès au panier -->
        <div class="navbar-cart">
            <router-link to="/cart" class="cart-link">
                ?? Panier <span v-if="cartCount">({{ cartCount }})</span>
            </router-link>
        </div>
    </nav>
</template>

<script>
    import { computed } from "vue";
    import { useStore } from "vuex";
    import { useRouter } from "vue-router";

    export default {
        name: "Navbar",
        setup() {
            const store = useStore();
            const router = useRouter();

            // Vérifier l'état de connexion
            const isAuthenticated = computed(() => {
                const authState = store.getters.isAuthenticated;
                console.log("Navbar - État de connexion :", authState);
                return authState;
            });

            // Calculer le nombre d'articles dans le panier
            const cartCount = computed(() => store.getters.cartCount);

            // Gérer le clic sur Connexion/Déconnexion
            const handleAuthAction = () => {
                if (isAuthenticated.value) {
                    console.log("Déconnexion via Navbar");
                    store.dispatch("logout");
                    router.push("/");
                } else {
                    console.log("Redirection vers /login via Navbar");
                    router.push("/login");
                }
            };

            return {
                isAuthenticated,
                cartCount,
                handleAuthAction,
            };
        },
    };
</script>

<style scoped>
    /* Style de la navbar */
    nav {
        display: flex;
        justify-content: space-between; /* Logo à gauche, liens centrés */
        align-items: center;
        background-color: #F1F2E0; /* Couleur de fond */
        padding: 10px 20px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Légère ombre */
    }

        nav .logo {
            height: 50px; /* Ajuste la hauteur du logo */
        }

        nav ul {
            list-style: none;
            display: flex;
            gap: 30px; /* Espacement entre les liens */
            margin: 0;
            padding: 0;
            flex: 1; /* Prend l'espace disponible */
            justify-content: center; /* Centre les liens */
        }

        nav li {
            display: inline-block;
        }

        nav a {
            color: #000; /* Couleur noire pour les liens */
            text-decoration: none;
            font-weight: bold;
            font-size: 18px;
            transition: color 0.3s;
        }

            nav a:hover {
                color: #8B0000; /* Rouge foncé au survol */
            }

    /* Style du panier */
    .navbar-cart {
        font-size: 18px;
        font-weight: bold;
    }

    .cart-link {
        color: #000;
        text-decoration: none;
        display: flex;
        align-items: center;
    }

        .cart-link:hover {
            color: #ffc107; /* Jaune doré au survol */
        }

    .navbar button {
        background-color: #710101;
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
    }

        .navbar button:hover {
            background-color: #a71d2a;
        }
</style>
