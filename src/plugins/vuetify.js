import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
// import colors from "vuetify/lib/util/colors";

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            light: {
                primary: "#3f51b5",
                secondary: "#b0bec5",
                accent: "#8c9eff",
                error: "#b71c1c"
            },
            dark: {
                primary: "#1e1e1e",
                secondary: "#f5f5f5",
                accent: "#2d2d2d",
                error: "#ff3c4e",
                info: "#c8c8c8",
                success: "#39b54a",
                warning: "#319ae3"
            }
        }
    }
});
