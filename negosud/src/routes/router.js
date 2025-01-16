import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ProductPage from '@/views/ProductPage.vue';
import Cart from '@/views/Cart.vue';
import Checkout from '@/views/Checkout.vue';
import Login from '@/views/login.vue';
import Signup from '@/views/Signup.vue';
import store from "@/store"; 

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name: 'ProductPage', component: ProductPage },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/checkout', name: 'Checkout', component: Checkout },
    { path: '/login', name: 'Login', component: Login },
    { path: '/signup', name: 'Signup', component: Signup },
    { path: '/:catchAll(.*)', redirect: '/' }, // Gérer les routes inexistantes
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Guard de navigation
router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters.isAuthenticated; // Vérifie si l'utilisateur est connecté

    // Bloquer uniquement les routes nécessitant une connexion
    const requiresAuth = ['Checkout']; // Liste des noms de routes protégées

    if (requiresAuth.includes(to.name) && !isAuthenticated) {
        alert("Vous devez être connecté pour accéder à cette page.");
        next('/login'); // Redirige vers la page de connexion
    } else {
        next(); // Continue la navigation
    }
});

export default router;
