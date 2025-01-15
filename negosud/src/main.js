import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/router'; // Import du fichier route.js
import store from "./store/"; // Import du store

const app = createApp(App); // Cr�ation de l'application Vue
app.use(store); // Ajout du store
app.use(router); // Ajout de Vue Router (optionnel)
app.mount('#app'); // Monte l'application dans l'�l�ment HTML avec l'ID `app`