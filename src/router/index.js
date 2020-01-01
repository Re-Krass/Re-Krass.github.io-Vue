import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Datenschutzerklaerung from "../views/Datenschutzerklaerung.vue";
import Impressum from "../views/Impressum.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Re-Krass Homepage",
        component: Home
    },
    {
        path: "/datenschutzerklaerung",
        name: "Datenschutzerklärung",
        component: Datenschutzerklaerung
    },
    {
        path: "/impressum",
        name: "Impressum",
        component: Impressum
    }
    // {
    //     path: "/about",
    //     name: "about",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    // }
];

const router = new VueRouter({
    routes
});

export default router;
