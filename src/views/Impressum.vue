<template lang="pug">
.home
    v-container(grid-list-md fluid)
        // Section 1
        v-layout
            v-flex(xs12)
                Section(icon="account_circle" title="Angaben gemäß § 5 TMG")
                    .text-container
                        div 
                            KontaktDaten() 
        // Section 2
        v-layout
            v-flex(xs12)
                Section(icon="gavel" title="Streitschlichtung")
                    .text-container
                        div 
                            p
                                | Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                                a(href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer") https://ec.europa.eu/consumers/odr
                                | .
                                br
                                |  Unsere E-Mail-Adresse finden Sie oben im
                                |     Impressum.
                            p
                                | Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                                | teilzunehmen.
                            h3 Haftung für Inhalte
                            p
                                | Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                                | allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                                | verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                                | zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                            p
                                | Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                                | hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                                | konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                                | Inhalte umgehend entfernen.
                            h3 Haftung für Links
                            p
                                | Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
                                | können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                                | verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                                | wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                                | Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                            p
                                | Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                                | Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
                                | entfernen.
                            h3 Urheberrecht
                            p
                                | Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                                | Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                                | Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
                                | Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                            p
                                | Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
                                | Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
                                | aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
                                | derartige Inhalte umgehend entfernen.
        // Section 3
        v-layout
            v-flex(xs12)
                Section(icon="search" title="Quellen")
                    .text-container
                        div 
                            | Quelle: 
                            a(href="https://www.e-recht24.de") eRecht24
</template>

<script>
import Section from "@/components/Section";
import KontaktDaten from "@/components/KontaktDaten";
// @ is an alias to /src
export default {
    name: "Impressum",
    components: { Section, KontaktDaten }
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
</style>
