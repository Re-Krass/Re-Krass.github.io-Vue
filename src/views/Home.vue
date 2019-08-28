<template>
    <div class="home">
        <v-container grid-list-md fluid>
            <!-- Section 1 - Informations -->
            <v-layout>
                <v-flex xs12>
                    <Section icon="info" title="Informations">
                        <div class="text-container">
                            On this site you can discover my University projects and private
                            projects.
                        </div>
                    </Section>
                </v-flex>
            </v-layout>
            <!-- Section 2 - Private projects -->
            <v-layout>
                <v-flex xs12>
                    <Section icon="code" title="Private projects">
                        <v-layout id="text-cards-container" wrap>
                            <v-flex id="text-card" xs12 sm6 md4>
                                <ThemeCard
                                    headline="Dark Theme for TUB sites"
                                    content="Dark theme for ISIS-TUB and MOSES-TUB site."
                                    link="https://github.com/dark-theme-styles/Dark-Theme-TUB"
                                    button-text="Go to project"
                                ></ThemeCard>
                            </v-flex>
                        </v-layout>
                    </Section>
                </v-flex>
            </v-layout>
            <!-- Section 3 - Uni projects -->
            <v-layout>
                <v-flex xs12>
                    <Section icon="code" title="University projects">
                        <v-layout id="text-cards-container" wrap>
                            <!-- Card 1 -->
                            <v-flex id="text-card" xs12 sm6 md4>
                                <ThemeCard
                                    headline="Y&D Learning Website"
                                    content="Website for Y&D Learning."
                                    link="https://ydlearning.com"
                                    button-text="Visit page"
                                ></ThemeCard>
                            </v-flex>
                            <!-- Card 2 -->
                            <v-flex id="text-card" xs12 sm6 md4>
                                <ThemeCard
                                    headline="Y&D Learning V2 Frontend"
                                    content="Frontend for Y&D Learning V2 made in Vue."
                                    link="https://github.com/ydlearning/ydl-v2-front"
                                    button-text="Go to project"
                                ></ThemeCard>
                            </v-flex>
                            <!-- Card 3 -->
                            <v-flex id="text-card" xs12 sm6 md4>
                                <ThemeCard
                                    headline="Y&D Learning V2 Backend / API"
                                    content="Backend for Y&D Learning V2 made in Django REST framework. "
                                    link="https://github.com/ydlearning/ydl-v2-api"
                                    button-text="Go to project"
                                ></ThemeCard>
                            </v-flex>
                        </v-layout>
                    </Section>
                </v-flex>
            </v-layout>
            <!-- Section 4 - Links -->
            <!-- <v-layout>
                <v-flex xs12>
                    <Section icon="link" title="Links">
                        <div class="text-container">
                            <ul>
                                <li>
                                    Visit our Dark-Theme-TUB website for more informations:
                                    <p>
                                        <img
                                            id="icons"
                                            src="https://raw.githubusercontent.com/dark-theme-styles/dark-theme-styles.github.io/master/images/favicon/android-chrome-512x512.png"
                                            alt="homepage favicon"
                                        />
                                        <a
                                            href="https://dark-theme-styles.github.io/Dark-Theme-TUB"
                                            target="_blank"
                                            >visit project website</a
                                        >
                                    </p>
                                </li>
                                <li>
                                    Visit our Homepage for more dark theme projects:
                                    <p>
                                        <img
                                            id="icons"
                                            src="https://raw.githubusercontent.com/dark-theme-styles/dark-theme-styles.github.io/master/images/favicon/android-chrome-512x512.png"
                                            alt="homepage favicon"
                                        />
                                        <a
                                            href="https://dark-theme-styles.github.io"
                                            target="_blank"
                                            >visit Homepage</a
                                        >
                                    </p>
                                </li>
                                <li>
                                    GitHub Dark-Theme-TUB project:
                                    <p>
                                        <a
                                            href="https://github.com/dark-theme-styles/Dark-Theme-TUB"
                                            target="_blank"
                                            >visit on GitHub</a
                                        >
                                    </p>
                                </li>
                                <li>
                                    GitHub Dark Theme Styles Organization page:
                                    <p>
                                        <a
                                            href="https://github.com/dark-theme-styles"
                                            target="_blank"
                                            >visit on GitHub</a
                                        >
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </Section>
                </v-flex>
            </v-layout> -->
            <!-- Section 5 - Author -->
            <v-layout>
                <v-flex xs12>
                    <Section icon="code" title="Author">
                        <div class="window__content">
                            <v-layout id="users-card" wrap justify-content-center>
                                <v-layout justify-content-center>
                                    <v-flex xs12 offset-xs2 sm12 offset-sm4 offset-md5>
                                        <ImageCard
                                            image-src="https://avatars1.githubusercontent.com/u/38668040"
                                            title-name="Re-Krass"
                                            link-href="https://github.com/Re-Krass"
                                        ></ImageCard>
                                    </v-flex>
                                </v-layout>
                            </v-layout>
                        </div>
                    </Section>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
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
    color: #319ae3

.text-container
    padding-left: 20px
    padding-top: 5px

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

.image-container
    display: flex

.image
    margin: 20px

::v-deep
    .theme--dark.v-list
        background-color: transparent

    .v-list
        padding: 0

        &__tile
            height: 35px !important
            padding-left: 5px !important
            //border-bottom: 2px solid #c8c8c8
            background-color: #363636
            box-shadow: 0 2px 2px -1px black
            padding-top: 0

            #v-list-tile-avatar
                min-width: 45px

            .text-container
                color: #c8c8c8

            &__title
                color: #ffffff

    .v-btn
        text-transform: none

    .container
        padding: 0

    #img-isis-tub
        border-bottom: 2px solid white

    #icons
        height: 17px
        display: inline-flex
        align-items: center
        justify-content: center
        vertical-align: middle
        padding-right: 5px
</style>
