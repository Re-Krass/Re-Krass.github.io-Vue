<template lang="pug">
//- Footer component
div 
    //- Footer
    v-footer.pa-0.mt-2.caption.text-center(padless)
        v-container.pa-0.ma-0(grid-list-md fluid)
            v-row.text-xs-center(
                no-gutters
                justify="center"
                align="center"
                )
                v-flex(xs12 sm12 md4)
                    v-col.pa-0.ma-0
                        v-card.text-center(
                            outlined 
                            tile
                            color="transparent"
                            elevation=0
                            )
                            v-card-actions.pa-0.ma-0
                                v-container.pa-0.ma-0(grid-list-md fluid)
                                    v-row.text-xs-center(
                                        no-gutters
                                        justify="center"
                                        align="center") 
                                            template(
                                                v-for="site in sites" )
                                                v-flex(xs12 sm12 md12 lg6)
                                                    v-col.pa-0.ma-0
                                                        v-btn.footer-btn(
                                                            :key="site.id"
                                                            @click="toTop"
                                                            :to="site.to"
                                                            depressed) 
                                                            | {{ site.name }}
                v-flex(xs12 sm12 md4)
                    v-col.pa-0.ma-0
                        v-card(
                            outlined 
                            tile
                            color="transparent"
                            elevation=0
                            )
                            v-card-text 
                                | last updated: {{ lastModified }} ©
                                | {{ new Date().getFullYear() }}
                v-flex(xs12 sm12 md4)
                    v-col.pa-0.ma-0
                        v-card(
                            outlined 
                            tile
                            color="transparent"
                            elevation=0) 
                            v-card-actions.pa-0.ma-0
                                v-flex(text-xs-center align-center)
                                    v-tooltip(
                                        left)
                                        template(
                                            v-slot:activator="{ on: tooltip }")
                                            v-btn.ma-0(
                                                fab
                                                x-small
                                                depressed
                                                v-on="{ ...tooltip }"
                                                color="transparent" 
                                                @click="toTop")
                                                v-icon mdi-arrow-up-circle-outline
                                        span Scroll to top
</template>

<script>
import { mapState } from "vuex";
import CountryFlag from "vue-country-flag";
import axiosInstance from "@/store/api";

export default {
    name: "Footer",
    inject: ["theme"],
    data: () => ({
        locales: ["en", "de"],
        languageSelection: false,
        sites: [
            {
                id: 1,
                name: "Datenschutzerklärung",
                to: "/datenschutzerklaerung"
            },
            {
                id: 2,
                name: "Impressum",
                to: "/impressum"
            }
        ]
    }),
    props: {
        value: {
            type: String,
            default: ""
        }
    },
    components: {
        // somehow indicate that this is a third party component (cf-)
        "cf-country-flag": CountryFlag
    },
    computed: {
        ...mapState(["darkTheme"]),
        // switchThemezzz() {
        //     return (this.darkTheme = false);
        // }
        getLocale: function() {
            var locale = this.$i18n.locale;
            // the icon component does not have flag for en
            if (locale === "en") {
                return "us";
            }
            return locale;
        },
        getLocales: function() {
            return this.locales.filter(locale => locale !== this.$i18n.locale);
        }
    },
    mounted() {
        this.getLastModified(); // TODO: Debug (.head is not a function...)
    },
    methods: {
        toTop() {
            this.$vuetify.goTo(0);
        },
        getLastModified() {
            // console.log(this);
            var self = this;
            axiosInstance
                .head("index.html")
                .then(function(response) {
                    // console.log(self);
                    // console.log(response.headers["last-modified"]);
                    self.lastModified = response.headers["last-modified"];
                })
                .catch();
        },
        switchTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        }
    }
};
</script>

<style lang="sass"></style>
