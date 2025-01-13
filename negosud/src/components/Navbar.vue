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
        <ul>
            <li v-for="link in links" :key="link.path">
                <a :href="link.path">{{ link.name }}</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    .navbar {
        background-color: #f8f9fa;
    }

    .navbar-brand {
        font-weight: bold;
    }
</style>
