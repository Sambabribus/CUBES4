import { createApp } from 'vue';
import App from './App.vue';
import router from './routes'; // Import du fichier route.js
import './assets/style.css'; // Optionnel : Import des styles globaux

const app = createApp(App); // Création de l'application Vue
app.use(router); // Ajout de Vue Router (optionnel)
app.mount('#app'); // Monte l'application dans l'élément HTML avec l'ID `app`