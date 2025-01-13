<script>
    export default {
        name: "Navbar",
        data() {
            return {
                links: [],
            };
        },
        mounted() {
            if (process.env.VUE_APP_USE_MOCK === "true") {
                this.links = [
                    { name: "Accueil", path: "/" },
                    { name: "Profil", path: "/profile" },
                    { name: "Produits", path: "/products" },
                ];
            } else {
                // Charger les liens via l'API ici (exemple)
                console.log("Charger les liens réels...");
            }
        },
    };
</script>

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
    </nav>
</template>

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

    /* Style pour le fond global de la page */
    body {
        background-color: #F5F5F5; /* Couleur de fond de la page */
        margin: 0;
        font-family: 'Arial', sans-serif;
    }

</style>
