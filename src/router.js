import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Datenschutzerklaerung from "./views/Datenschutzerklaerung.vue";
import Impressum from "./views/Impressum.vue";

Vue.use(Router);

export default new Router({
    // mode: "history",
    // base: process.env.BASE_URL,
    routes: [
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
    ]
});
