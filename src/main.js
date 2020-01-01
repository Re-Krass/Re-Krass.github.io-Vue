import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

import vuetify from "./plugins/vuetify";
import VueHighlightJS from "vue-highlightjs";

// import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

Vue.config.productionTip = false;

Vue.use(VueHighlightJS);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");
