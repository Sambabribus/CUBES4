import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ProductPage from '@/views/ProductPage.vue';
import Cart from '@/views/Cart.vue';
import Checkout from '@/views/Checkout.vue';
import Login from '@/views/login.vue';
import Signup from '@/views/Signup.vue';
import UserProfile from '@/views/UserProfile.vue';
import store from "@/store"; 
import { useStore } from 'vuex';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name: 'ProductPage', component: ProductPage },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/checkout', name: 'Checkout', component: Checkout, meta: { requiresAuth: true } }, // Page protéger
    { path: '/user', name: 'UserProfile', component: UserProfile, meta: { requiresAuth: true } }, // Page utilisateur protégée
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
    const isAuthenticated = store.getters.isAuthenticated;
    console.log("Navigation vers :", to.path, "- Utilisateur connecté :", isAuthenticated);

    // Vérification des routes protégées
    if (to.meta.requiresAuth && !isAuthenticated) {
        console.log("Accès interdit. Redirection vers /login");
        next({ path: '/login', query: { redirect: to.fullPath } });
    } else {
        next();
    }
});



export default router;
