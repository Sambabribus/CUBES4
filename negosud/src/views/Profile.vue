<
<script>
    export default {
        name: "Profile",
        data() {
            return {
                user: null,
            };
        },
        methods: {
            async fetchUserProfile() {
                if (process.env.VUE_APP_USE_MOCK === "true") {
                    this.user = {
                        name: "John Doe",
                        email: "john.doe@example.com",
                        avatar: "https://via.placeholder.com/150",
                    };
                } else {
                    // Exemple d'appel API réel
                    console.log("Chargement du profil utilisateur...");
                }
            },
        },
        mounted() {
            this.fetchUserProfile();
        },
    };
</script>

<template>
    <div v-if="user">
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
        <img :src="user.avatar" alt="Avatar" />
    </div>
</template>


<style scoped>
    .container {
        max-width: 800px;
    }

    .card {
        margin-bottom: 20px;
    }
</style>
