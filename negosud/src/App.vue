<template>
    <div id="app">
        <Navbar /> <!-- Barre de navigation présente sur toutes les pages -->
        <main>
            <router-view /> <!-- Affiche la vue correspondant à la route actuelle -->
        </main>
        <Footer /> <!-- Pied de page présent sur toutes les pages -->
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue';
    import Footer from './components/Footer.vue';

    export default {
        name: 'App',
        components: {
            Navbar,
            Footer,
        },
    };
</script>

<style>
    /* Ajoute des styles globaux ici */
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    main {
        padding: 20px;
    }
    /* Style pour la navbar */
    nav {
        display: flex;
        justify-content: space-between; /* Logo à gauche, liens au centre */
        align-items: center;
        background-color: #F1F2E0; /* Couleur de fond */
        padding: 10px 20px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Ombre légère */
    }

        nav .logo {
            height: 50px; /* Taille du logo */
        }

        nav ul {
            list-style: none;
            display: flex;
            gap: 30px; /* Espacement entre les liens */
            margin: 0;
            padding: 0;
            flex: 1; /* Prend l'espace disponible */
            justify-content: center; /* Centre les liens horizontalement */
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

</style>
