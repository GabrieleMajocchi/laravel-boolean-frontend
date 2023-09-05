import { createRouter, createWebHistory } from "vue-router";
import Homepage from './views/HomePage.vue'
import CocktailShow from './views/CocktailShow.vue'
import AboutUs from './views/AboutUs.vue'
import Contacts from './views/Contacts.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        },
        {
            path: '/:id',
            name: 'CocktailShow',
            component: CocktailShow
        },
        {
            path: '/about-us',
            name: 'AboutUs',
            component: AboutUs
        },
        {
            path: '/contacts',
            name: 'Contact',
            component: Contacts
        },
    ],
});
export { router };
