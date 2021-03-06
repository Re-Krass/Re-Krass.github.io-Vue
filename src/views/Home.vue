<template lang="pug">
.home
    v-container(grid-list-md fluid)
        // Section 1 - Informations
        v-layout
            v-flex(xs12)
                Section(icon="info" title="Informations")
                    .text-container
                        | On this site you can discover my University projects and personal
                        | projects.
        // Section 1.2 - Certificates
        v-layout
            v-flex(xs12)
                Section(icon="attach_file" title="Certificates")
                    .text-container
                        v-layout(row wrap fill-height align-center)
                            v-flex(xs12 sm3)
                                v-tooltip(bottom)
                                    template(v-slot:activator="{ on: tooltip }")
                                        a(href="https://skillshub.isqi.org/jpp8kloi" target="_blank" v-on="{ ...tooltip }")
                                            v-img(
                                                alt="Certificate logo" 
                                                src="https://s3.amazonaws.com/accredible-api-badge/1560852655189240.png" 
                                                width="100%")
                                            // src="https://images.credential.net/badge/tiny/jpp8kloi_badge.png"
                                    span
                                        v-icon(size="15px") link
                                        |  Visit my
                                        i Skillshub
                                        |  page
                            v-flex(xs12 sm9)
                                ul
                                    li
                                        | Visit my 
                                        i
                                            b Skillshub page
                                        |  to explore my
                                        |                                     certificates:
                                        p
                                            a(href="https://skillshub.isqi.org/profile/renkarra/wallet" target="_blank")
                                                | Skillshub Wallet
                                    li
                                        | Direct link to my
                                        i
                                            b ISTQB® Certified Tester - Foundation Level
                                        |                                     certificate:
                                        p
                                            a(href="https://skillshub.isqi.org/jpp8kloi" target="_blank") Foundation Level certificate
                            
        // Section 2 - About me / Links
        v-layout
            v-flex(xs12)
                Section(icon="link" title="About me")
                    .text-container
                        p Find me on:
                        ul
                            li
                                i
                                    b LinkedIn
                                |  for my business profile:
                                p
                                    a(href="https://www.linkedin.com/in/rene-karrass/" target="_blank") visit LinkedIn page
                            li
                                i
                                    b XING
                                |  for my business profile:
                                p
                                    a(href="https://www.xing.com/profile/Rene_Karrass/cv" target="_blank") visit XING page
                            li
                                i
                                    b GitHub
                                |  for all my projects:
                                p
                                    a(href="https://github.com/Re-Krass" target="_blank") visit GitHub page
                            li
                                i
                                    b Skillshub
                                |  for my certificates:
                                p
                                    a(href="https://skillshub.isqi.org/profile/renkarra" target="_blank") visit Skillshub
                            li
                                i
                                    b Codepen
                                |  for my code snippets:
                                p
                                    a(href="https://codepen.io/Re-Krass" target="_blank") visit Codepen

        // Section 3 - Personal projects
        v-layout
            v-flex(xs12)
                Section(icon="code" title="Personal projects")
                    v-layout#text-cards-container(wrap)
                        // Card
                        v-flex#text-card(xs12 sm6 md4)
                            ThemeCard(
                                headline="Dark Theme for TUB sites" 
                                content="Dark theme for ISIS-TUB and MOSES-TUB site." 
                                link="https://github.com/dark-theme-styles/Dark-Theme-TUB" 
                                button-text="Go to project")
                        // Card
                        v-flex#text-card(xs12 sm6 md4)
                            ThemeCard(
                                headline="Y&D Learning Website V2" 
                                content="Website for Y&D Learning." 
                                link="https://ydlearning.github.io/ydl-v2-front/" 
                                button-text="Visit page")
                        // Card
                        v-flex#text-card(xs12 sm6 md4)
                            ThemeCard(
                                headline="Y&D Learning V2 Frontend" 
                                content="Frontend for Y&D Learning V2 made in Vue + Vuetify." 
                                link="https://github.com/ydlearning/ydl-v2-front" button-text="Go to project")
                        // Card
                        v-flex#text-card(xs12 sm6 md4)
                            ThemeCard(
                                headline="Y&D Learning V2 Backend / API" 
                                content="Backend for Y&D Learning V2 made in Django REST framework. " 
                                link="https://github.com/ydlearning/ydl-v2-api" button-text="Go to project")
                        // Card
                        v-flex#text-card(xs12 sm6 md4)
                            ThemeCard(
                                headline="Re-Krass Homepage" 
                                content="This Homepage made in Vue + Vuetify." 
                                link="https://github.com/Re-Krass/Re-Krass.github.io-Vue" 
                                button-text="Go to project")
        // Section 4 - Uni projects
        v-layout
            v-flex(xs12)
                Section(icon="code" title="University projects")
                    v-layout#text-cards-container(wrap)
                        h3.pl-3 These projects were completed for the module ‘Programming Lab: Social Networking‘ at TU Berlin.
                    v-layout#text-cards-container(wrap)
                        // Card
                        v-flex#text-card(xs12 sm6 md4)
                            ThemeCard(
                                headline="Y&D Learning Website V1" 
                                content="Website for Y&D Learning." 
                                link="https://younganddigitallearning.github.io/ydl-front/" 
                                button-text="Visit page")
                        // Card
                        v-flex#text-card(xs12 sm6 md4)
                            ThemeCard(
                                headline="Y&D Learning V1 Frontend" 
                                content="Frontend for Y&D Learning V2 made in Vue." 
                                link="https://github.com/YoungAndDigitalLearning/ydl-front" 
                                button-text="Go to project")
                        // Card
                        v-flex#text-card(xs12 sm6 md4)
                            ThemeCard(
                                headline="Y&D Learning V1 Backend / API" 
                                content="Backend for Y&D Learning V2 made in Django REST framework. " 
                                link="https://github.com/YoungAndDigitalLearning/ydl-api" 
                                button-text="Go to project")
                        // Card
                        v-flex#text-card(xs12 sm6 md4)
                            ThemeCard(
                                headline="2Do4You" 
                                content="ToDo website made in Django." 
                                link="https://github.com/B4rtware/2do4you" 
                                button-text="Go to project")
        // Section 6 - Author
        v-layout
            v-flex(xs12)
                Section(icon="mdi-account" title="Author")
                    .window__content
                        v-layout#users-card(wrap justify-content-center)
                            v-layout(justify-content-center)
                                v-flex(xs12 offset-xs2 sm12 offset-sm4 offset-md5)
                                    v-flex(text-xs-center align-center)
                                        ImageCard(image-src="https://avatars1.githubusercontent.com/u/38668040" title-name="Re-Krass" link-href="https://github.com/Re-Krass")
</template>

<script>
import ThemeCard from "@/components/home/ThemeCard";
import ImageCard from "@/components/home/ImageCard";
import Section from "@/components/Section";
// @ is an alias to /src
export default {
    name: "Home",
    components: { ThemeCard, ImageCard, Section }
};
</script>

<style lang="sass" scoped>
a
    color: #319ae3!important //TODO: Fix color of a elements
    // color: #ffffff!important

.text-container
    padding-left: 20px
    padding-top: 5px

.logo
    display: flex

ul ul li
    padding-bottom: 5px

#text-cards-container
    padding-top: 3px
    padding-left: 10px
    padding-right: 10px
    padding-bottom: 10px

#text-card
    padding-left: 1%
    padding-right: 1%

#users-card
    padding-top: 1em
    padding-bottom: 1em

.image-container
    display: flex

.image
    margin: 20px

::v-deep
    .theme--dark.v-list
        background-color: transparent

    .v-list
        padding: 0

        &-item
            min-height: 2.5em
            height: 2.5em
            padding-left: 5px!important
            background-color: #363636
            box-shadow: 0 2px 2px -1px black
            // display: inline-flex
            // align-items: center
            // justify-content: center
            vertical-align: middle

            &__title
                color: #ffffff

            &__icon
                margin-top: 0.2em
                margin-right: 1em!important

            .text-container
                color: #c8c8c8

    .v-btn
        text-transform: none

    .container
        padding: 0

    // #icons
    //     height: 17px
    //     display: inline-flex
    //     align-items: center
    //     justify-content: center
    //     vertical-align: middle
    //     padding-right: 5px
</style>
