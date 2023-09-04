import { createRouter, createWebHistory } from "vue-router";
import Homepage from './views/HomePage.vue'
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
