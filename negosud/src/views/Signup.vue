<template>
    <div class="signup-page">
        <h1>Créer un compte</h1>
        <form @submit.prevent="signup">
            <label for="email">Email :</label>
            <input type="email" id="email" v-model="formData.mail" required />

            <label for="phone_number">Numéro de téléphone :</label>
            <input type="tel" id="phone_number" v-model="formData.phone_number" required />

            <label for="address">Adresse :</label>
            <input type="text" id="address" v-model="formData.address" required />

            <label for="username">Nom d'utilisateur :</label>
            <input type="text" id="username" v-model="formData.username" required />

            <label for="password">Mot de passe :</label>
            <input type="password" id="password" v-model="formData.password" required />

            <label for="first_name">Prénom :</label>
            <input type="text" id="first_name" v-model="formData.first_name" required />

            <label for="last_name">Nom :</label>
            <input type="text" id="last_name" v-model="formData.last_name" required />

            <label for="birthday">Date de naissance :</label>
            <input type="date" id="birthday" v-model="formData.birthday" required />

            <label for="gender">Genre :</label>
            <select id="gender" v-model="formData.gender" required>
                <option value="male">Homme</option>
                <option value="female">Femme</option>
                <option value="other">Autre</option>
            </select>

            <button type="submit">S'inscrire</button>
        </form>

        <p>
            Déjà un compte ?
            <router-link to="/login">Se connecter</router-link>
        </p>
    </div>
</template>

<script>
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import { signupUser } from "../services/api"; // Import de l'API

    export default {
        setup() {
            const router = useRouter();
            const formData = ref({
                mail: "",
                phone_number: "",
                address: "",
                username: "",
                password: "",
                first_name: "",
                last_name: "",
                birthday: "",
                gender: "",
            });

            const signup = async () => {
                try {
                    const response = await signupUser(formData.value); // Appel API
                    alert("Compte créé avec succès !");
                    router.push("/login"); // Redirection
                } catch (error) {
                    alert(error.response?.data?.message || "Une erreur s'est produite.");
                    console.error("Erreur lors de l'inscription :", error);
                }
            };

            return {
                formData,
                signup,
            };
        },
    };

</script>

<style scoped>
    .signup-page {
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

        form input,
        form select {
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
