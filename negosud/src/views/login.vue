<template>
    <div class="login-page">
        <h1>Connexion</h1>
        <form @submit.prevent="login">
            <label for="username">Nom d'utilisateur :</label>
            <input type="text" id="username" v-model="username" required />


            <label for="password">Mot de passe :</label>
            <input type="password" id="password" v-model="password" required />

            <button type="submit">Se connecter</button>
        </form>

        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

        <p>
            Pas encore de compte ?
            <router-link to="/signup">Créer un compte</router-link>
        </p>
    </div>
</template>

<script>
    import { ref } from "vue";
    import { useStore } from "vuex";
    import { useRouter } from "vue-router";

    export default {
        setup() {
            const store = useStore();
            const router = useRouter();

            const username = ref(""); // Email réactif
            const password = ref(""); // Mot de passe réactif
            const errorMessage = ref(""); // Message d'erreur réactif

            const login = async () => {
                try {
                    console.log("Tentative d'appel à store.dispatch('login')");
                    const success = await store.dispatch("login", {
                        username: username.value,
                        password: password.value,
                    });
                    console.log(success);

                    if (success) {
                        alert("Connexion réussie !");
                        const redirectTo = router.currentRoute.value.query.redirect || "/";
                        router.push(redirectTo);
                    } else {
                        console.error("Connexion échouée.");
                        errorMessage.value = "Erreur de connexion. Veuillez réessayer.";
                    }
                 }catch (error) {
                    console.error("Erreur capturée :", error.response?.data || error.message);
                    errorMessage.value = error.response?.data?.message || "Une erreur est survenue.";
                //}
              //  catch (error) {
                // Gerer les erreurs du backend
                if (error.response?.status === 404) {
                    errorMessage.value = "Utilisateur introuvable.";
                } else if (error.response?.status === 401) {
               errorMessage.value = "Mot de passe incorrect.";
              } else {
                errorMessage.value = "Une erreur est survenue. Veuillez réessayer.";
                 }
          }
            };

            return {
                username,
                password,
                errorMessage,
                login,
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

    .error {
        color: red;
        font-weight: bold;
        margin-top: 10px;
    }
</style>
