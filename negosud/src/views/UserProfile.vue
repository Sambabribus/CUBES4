<template>
    <div class="user-profile">
        <h1>Profil de l'utilisateur</h1>
        <p>Bienvenue, {{ user.username }} !</p>
        <p>Email : {{ user.email }}</p>
        <p>Role : {{ user.role }}</p>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
    setup() {
        const store = useStore();
        const user = computed(() => store.state.user); // Récupérer les informations utilisateur

        return {
            user,
        };
    },
};
</script>

<style scoped>
    .user-profile {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f9f9f9;
        text-align: center;
    }
</style>
