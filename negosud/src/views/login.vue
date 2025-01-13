<script>
    export default {
        name: "Login",
        data() {
            return {
                email: "",
                password: "",
            };
        },
        methods: {
            login() {
                if (process.env.VUE_APP_USE_MOCK === "true") {
                    alert("Connexion simulée avec succès !");
                } else {
                    // Exemple d'appel à une API (remplacé par un mock en dev)
                    console.log("Connexion réelle avec : ", this.email, this.password);
                }
            },
        },
    };
</script>

<template>
    <div class="login">
        <h2>Connexion</h2>
        <form @submit.prevent="login">
            <div>
                <label for="email">Email</label>
                <input id="email" v-model="email" type="email" />
            </div>
            <div>
                <label for="password">Mot de passe</label>
                <input id="password" v-model="password" type="password" />
            </div>
            <button type="submit">Se connecter</button>
        </form>
    </div>
</template>


<style scoped>
    .container {
        max-width: 500px;
    }
</style>
