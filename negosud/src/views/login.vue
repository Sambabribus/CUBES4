<template>
    <div class="login-page">
        <h1>Connexion</h1>
        <form @submit.prevent="login">
            <label for="email">Email :</label>
            <input type="email" id="email" v-model="email" required />

            <label for="password">Mot de passe :</label>
            <input type="password" id="password" v-model="password" required />

            <button type="submit">Se connecter</button>
        </form>

        <p>
            Pas encore de compte ?
            <router-link to="/signup">Créer un compte</router-link>
        </p>
    </div>
</template>

<script>
    import { ref } from "vue"; // Importez `ref` pour créer des propriétés réactives
    import { useStore } from "vuex"; // Utilisez le store Vuex
    import { useRouter } from "vue-router"; // Utilisez Vue Router pour la navigation

    export default {
        setup() {
            const store = useStore(); // Accès au store Vuex
            const router = useRouter(); // Accès au routeur Vue

            const email = ref(""); // Déclarez l'email comme une propriété réactive
            const password = ref(""); // Déclarez le mot de passe comme une propriété réactive

            const login = async () => {
                const success = await store.dispatch("login", {
                    email: email.value,
                    password: password.value,
                });
                if (success) {
                    alert("Connexion réussie !");
                    const redirectTo = router.currentRoute.value.query.redirect || "/"; // Redirige vers la destination ou la page d'accueil
                    router.push(redirectTo);
                } else {
                    alert("Identifiants incorrects. Veuillez réessayer.");
                }
            };

            return {
                email,
                password,
                login, // Exposez la méthode `login` pour le template
            };
        },
    };
</script>

<style scoped>
    .login-page {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f9f9f9;
    }

    form {
        display: flex;
        flex-direction: column;
    }

        form label {
            margin-bottom: 5px;
            font-weight: bold;
        }

        form input {
            margin-bottom: 15px;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        form button {
            background-color: #710101;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }

            form button:hover {
                background-color: #a71d2a;
            }
</style>
