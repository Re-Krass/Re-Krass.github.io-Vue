<template lang="pug">
.home
    v-container(grid-list-md fluid)
        // Section 1
        v-layout
            v-flex(xs12)
                Section#s1(icon="mdi-account-tie-outline" title="Diensteanbieter")
                    .text-container
                        div 
                            table.dataTable
                                tr
                                    td 
                                        strong Name:
                                        td René Karraß
                                tr
                                    td 
                                        strong Land:
                                    td Deutschland

        v-layout
            v-flex(xs12)
                Section#s2(icon="mdi-contact-mail" title="Kontaktmöglichkeiten")
                    .text-container
                        div 
                            table.dataTable
                                tr
                                    td 
                                        strong E-Mail:
                                    td 
                                        a(href="mailto:rene.karrass@outlook.de") rene.karrass@outlook.de
                                tr
                                    td 
                                        strong LinkedIn:
                                    td 
                                        a(href="https://www.linkedin.com/in/rene-karrass/") visit LinkedIn page
                                tr
                                    td 
                                        strong Xing:
                                    td 
                                        a(href="https://www.xing.com/profile/Rene_Karrass/cv") visit Xing page
                                tr
                                    td 
                                        strong GitHub:
                                    td 
                                        a(href="https://github.com/Re-Krass") visit GitHub page
                                tr
                                    td 
                                        strong Skillshub:
                                    td 
                                        a(href="https://skillshub.isqi.org/profile/renkarra") visit Skillshub page
                                tr
                                    td 
                                        strong Codepen:
                                    td 
                                        a(href="https://codepen.io/Re-Krass") visit Codepen page
                                tr
                                    td 
                                        strong Datenschutzerklärung:
                                    td 
                                        router-link(@click.native="scrollToTop" to="/datenschutzerklaerung") Datenschutzerklärung
                                
        v-layout
            v-flex(xs12)
                Section#s3(icon="toc" title="Inhaltsübersicht")
                    .text-container
                        div 
                            ul.toc
                                li
                                    a.index-link(href="#s1")
                                        v-icon(color="#319ae3").toc-icon mdi-account-tie-outline
                                        span.tocText Diensteanbieter
                                li
                                    a.index-link(href="#s2")
                                        v-icon(color="#319ae3").toc-icon mdi-contact-mail
                                        span.tocText Kontaktmöglichkeiten
                                li 
                                    a.index-link(href="#s3") 
                                        v-icon(color="#319ae3").toc-icon toc
                                        span.tocText Inhaltsübersicht
                                li 
                                    a.index-link(href="#s4")
                                        v-icon(color="#319ae3").toc-icon mdi-post
                                        span.tocText Journalistisch-redaktionelle Angebote
                                li 
                                    a.index-link(href="#s5") 
                                        v-icon(color="#319ae3").toc-icon gavel
                                        span.tocText Online-Streitbeilegung (OS)
                                li 
                                    a.index-link(href="#s6") 
                                        v-icon(color="#319ae3").toc-icon mdi-cellphone-message
                                        span.tocText Social Media und andere Onlinepräsenzen
                                li 
                                    a.index-link(href="#s7") 
                                        v-icon(color="#319ae3").toc-icon gavel
                                        span.tocText Haftungs- und Urheberrechtshinweise
                                    ul
                                        li 
                                            a.index-link(href="#s7-1") Haftungsausschluss
                                        li 
                                            a.index-link(href="#s7-2") Links auf fremde Webseiten
                                        li 
                                            a.index-link(href="#s7-3") Urheberrechte und Markenrechte
                                        li 
                                            a.index-link(href="#s7-4") Hinweise auf Rechtsverstöße
                                li 
                                    a.index-link(href="#s8") 
                                        v-icon(color="#319ae3").toc-icon search
                                        span.tocText Quellen

        v-layout
            v-flex(xs12)
                Section#s4(icon="mdi-post" title="Journalistisch-redaktionelle Angebote")
                    .text-container
                        div
                            h3 Inhaltlich verantwortlich
                            table.dataTable
                                tr
                                    td 
                                        strong Name:
                                    td René Karraß
                                tr
                                    td 
                                        strong Land:
                                    td Deutschland
                                tr
                                    td 
                                        strong Kontakt:
                                    td 
                                        a(href="#s2") Kontaktmöglichkeiten

        v-layout
            v-flex(xs12)
                Section#s5(icon="gavel" title="Online-Streitbeilegung (OS)")
                    .text-container
                        div
                            p
                                | Online-Streitbeilegung: Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die
                                | Sie unter 
                                a(href="https://ec.europa.eu/consumers/odr/" target="_blank") https://ec.europa.eu/consumers/odr/
                                |     finden. Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten zu nutzen.

        v-layout
            v-flex(xs12)
                Section#s6(icon="mdi-cellphone-message" title="Social Media und andere Onlinepräsenzen")
                    .text-container
                        div
                            p
                                strong
                                    | Dieses Impressum gilt auch für die folgenden Social-Media-Präsenzen und Onlineprofile
                                | :
                            p
                                a(href="https://www.linkedin.com/in/rene-karrass/" target="_blank") https://www.linkedin.com/in/rene-karrass/
                            p
                                a(href="https://www.xing.com/profile/Rene_Karrass/cv" target="_blank") https://www.xing.com/profile/Rene_Karrass/cv
                            p
                                a(href="https://github.com/Re-Krass" target="_blank") https://github.com/Re-Krass
                            p
                                a(href="https://skillshub.isqi.org/profile/renkarra" target="_blank") https://skillshub.isqi.org/profile/renkarra
                            p
                                a(href="https://codepen.io/Re-Krass" target="_blank") https://codepen.io/Re-Krass
                            p
                                a(href="https://github.com/Re-Krass" target="_blank") https://github.com/Re-Krass

        v-layout
            v-flex(xs12)
                Section#s7(icon="gavel" title="Haftungs- und Urheberrechtshinweise")
                    .text-container
                        div
                            h3#s7-1 Haftungsausschluss:
                            p
                                | Die Inhalte dieses Onlineangebotes wurden sorgfältig und nach unserem aktuellen
                                | Kenntnisstand erstellt, dienen jedoch nur der Information und entfalten keine rechtlich bindende Wirkung, sofern es
                                | sich nicht um gesetzlich verpflichtende Informationen (z.B. das Impressum, die Datenschutzerklärung, AGB oder
                                | Widerrufsbelehrungen für Verbraucher) handelt. Wir behalten uns vor, die Inhalte vollständig oder teilweise zu
                                | ändern oder zu löschen, soweit vertragliche Verpflichtungen unberührt bleiben. Alle Angebote sind freibleibend und
                                | unverbindlich.
                            h3#s7-2 Links auf fremde Webseiten:
                            p
                                | Inhalte fremder Webseiten, auf die wir direkt oder indirekt verweisen,
                                | liegen außerhalb unseres Verantwortungsbereiches und machen wir uns nicht zu Eigen. Für alle Inhalte und
                                | insbesondere für Schäden, die aus der Nutzung der in den verlinkten Webseiten aufrufbaren Informationen entstehen,
                                | haftet allein der Anbieter der verlinkten Webseiten.
                            h3#s7-3 Urheberrechte und Markenrechte:
                            p
                                | Alle auf dieser Website dargestellten Inhalte, wie Texte,
                                | Fotografien, Grafiken, Marken und Warenzeichen sind durch die jeweiligen Schutzrechte (Urheberrechte, Markenrechte)
                                | geschützt. Die Verwendung, Vervielfältigung usw. unterliegen unseren Rechten oder den Rechten der jeweiligen Urheber
                                | bzw. Rechteverwalter.
                            h3#s7-4 Hinweise auf Rechtsverstöße:
                            p
                                | Sollten Sie innerhalb unseres Internetauftritts Rechtsverstöße
                                | bemerken, bitten wir Sie uns auf diese hinzuweisen. Wir werden rechtswidrige Inhalte und Links nach Kenntnisnahme
                                | unverzüglich entfernen.

        v-layout
            v-flex(xs12)
                Section#s8(icon="search" title="Quellen")
                    .text-container
                        div 
                            p
                                | Das Impressum wurde 
                                a(href="https://datenschutz-generator.de/?l=de" title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." target="_blank")
                                    | erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
</template>

<script>
import Section from "@/components/Section";
import KontaktDaten from "@/components/KontaktDaten";
// @ is an alias to /src
export default {
    name: "Impressum",
    components: { Section, KontaktDaten },
    methods: {
        scrollToTop() {
            this.$vuetify.goTo(0);
        }
    }
};
</script>

<style lang="sass" scoped>
a
    color: #319ae3

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

.dataTable td
    padding-left: 20px

.toc-icon
    height: 1em
    display: inline-flex
    align-items: center
    justify-content: center
    vertical-align: middle
    padding-right: 0.3em
    text-decoration: none!important

.tocText
    text-decoration: underline

.index-link
    text-decoration: none
</style>
