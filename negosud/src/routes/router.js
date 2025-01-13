import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ProductPage from '@/views/ProductPage.vue';
import Cart from '@/views/Cart.vue';
import Checkout from '@/views/Checkout.vue';
import Login from '@/views/login.vue';
import Profile from '@/views/Profile.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name: 'ProductPage', component: ProductPage },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/checkout', name: 'Checkout', component: Checkout },
    { path: '/login', name: 'Login', component: Login },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/:catchAll(.*)', redirect: '/' }, // Gérer les routes inexistantes
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
