import {createRouter, createWebHistory} from "vue-router";
import Home from "./shared/presentation/views/home.vue";

const routes = [
    { path: "/home", name: "home", component: Home, meta: {title: "Home"}}
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

router.beforeEach((to, from) => {
    console.log(`Navigating to ${to.name} from ${from.name}`);
    let baseTitle = 'ACME Learning Center';
    document.title = `${baseTitle} - ${to.meta['title']}`;
    return true;
});

export default router;