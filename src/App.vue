<template lang="pug">
v-app#app(dark)
	v-content#v-content
		v-card#window.shake-animation(color="primary")
			#nav
				v-toolbar(flat color="success")
					v-toolbar-title.font-weight-bold
						| $: {{ headerTextCurrent }}
						transition(name="cursor-fade")
							span(v-if="typingText") _
					v-spacer
					v-toolbar-items.hidden-sm-and-down
						v-btn(flat to="/") Home
						// <v-btn flat to="/newsite">Newsite</v-btn>
					v-menu#burger-menu(left nudge-bottom="5" offset-y transition="slide-y-transition")
						template(v-slot:activator="{ on }")
							v-btn.hidden-md-and-up(dark icon v-on="on")
								v-icon menu
						v-list#burger-menu-list
							v-list-tile
								v-btn(flat to="/") Home
							//
								<v-list-tile>
								<v-btn flat to="/newsite">Newsite</v-btn>
							// </v-list-tile>
					v-btn(flat icon color="error" @click="shakeAnimationF")
						v-icon close
			router-view
			v-footer.pa-2.mt-2.caption.text-center(height="23")
				v-container.pa-0.ma-0(fluid )
					v-layout(row fill-height align-center )
						v-flex(xs4 text-xs-left)
							v-card.text-center(
								color="transparent"
								elevation=0)
								v-card-text 
						v-flex(xs4 text-xs-center)
							v-card.text-center(
								color="transparent"
								elevation=0
							)
								v-card-text 
									| last updated: {{ lastModified }} ©
									| {{ new Date().getFullYear() }}
						v-flex(xs4 text-xs-right)
							v-card.text-center(
								color="transparent"
								elevation=0)
								v-card-actions.pa-0.ma-0
									v-spacer
									//- router-link(
										to="/datenschutzerklaerung") Datenschutzerklärung
									v-btn(
										@click.native="scrollToTop"
										to="/datenschutzerklaerung") Datenschutzerklärung
									v-btn(
										@click.native="scrollToTop"
										to="/impressum"
									) Impressum
				//- v-layout(
					align-center 
					justify-space-between 
					row 
					fill-height)
					v-card.pa-1(
						color="transparent"
						elevation=0)
						|             
					v-card.pa-1(
						color="transparent"
						elevation=0)
						| last updated: {{ lastModified }} ©
						| {{ new Date().getFullYear() }}
					v-card.pa-1(
						color="transparent"
						elevation=0)
						v-btn(
							to="/datenschutzerklaerung"
						) Datenschutzerklärung
						v-btn(
							to="/impressum"
						) Impressum

				//- v-container.grey.lighten-5
					v-row(no-gutters)
						v-col(v-for="n in 3" :key="n" cols="12" sm="4")
							v-card.pa-2(outlined tile)
								| One of three columns
				//- v-container.grey.lighten-5
					v-row(no-gutters)
						v-col(
							cols="12" 
							sm="4")
							v-card.pa-2(
								outlined 
								tile)
								| One of three columns
						v-col(
							cols="12" 
							sm="4")
							v-card.pa-2(
								outlined 
								tile)
								| One of three columns
				//- v-container(fluid)
					v-row
						v-col(cols="12")
							v-row.grey.lighten-5(
								align="center" 
								justify="space-around" 
							)
								v-card.ma-3.pa-6(
									outlined
									tile
								) dsds
									| Column 1
								v-card.ma-3.pa-6(
									outlined
									tile
								)
									| Column 2
								v-card.ma-3.pa-6(
									outlined
									tile
								)
									| Column 3
</template>

<script>
import { setInterval, clearInterval, setTimeout } from "timers";
import axiosInstance from "@/store/api";
export default {
    name: "App",
    data() {
        return {
            headerText: this.$route.name,
            headerTextCurrent: "",
            intervallID: null,
            typingText: true,
            lastModified: ""
        };
    },
    watch: {
        $route: function() {
            this.displayTitle();
        }
    },
    mounted() {
        this.displayTitle();
        this.getLastModified();
    },
    methods: {
        shakeAnimationF() {
            var animation_elements = [document.getElementById("window")];
            for (let anim_elem of animation_elements) {
                anim_elem.classList.toggle("shake-animation-active");
                setTimeout(() => {
                    anim_elem.classList.remove("shake-animation-active");
                }, 400);
            }
        },
        scrollToTop() {
            // window.scrollTo(0, 0);
            this.$vuetify.goTo(0);
        },
        getLastModified() {
            console.log(this);
            var self = this;
            axiosInstance
                .head("index.html")
                .then(function(response) {
                    console.log(self);
                    console.log(response.headers["last-modified"]);
                    self.lastModified = response.headers["last-modified"];
                })
                .catch(error => console.log(error));
        },
        displayTitle() {
            // reset interval and string
            clearInterval(this.intervallID);
            this.typingText = true;
            this.headerTextCurrent = "";
            this.headerText = this.$route.name;
            var maxLen = this.headerText.length;
            var delay = 200 / maxLen;
            // using es6 shorthand function declaration ovverides the this var to local so the parent this will be overriden
            var self = this;
            this.intervallID = setInterval(() => {
                var curLen = self.headerTextCurrent.length;
                self.headerTextCurrent += self.headerText[curLen];

                if (self.headerTextCurrent.length >= maxLen) {
                    clearInterval(self.intervallID);
                    setTimeout(() => {
                        self.typingText = false;
                    }, 500);
                }
            }, delay);
        }
    }
};
</script>

<style lang="sass">
html
	/* own scrollbar */
	/* scrollbar firefox */
	scrollbar-color: rgb(110, 110, 110) rgb(1, 1, 1)

.cursor-fade-leave-active
	transition: all 0.8s ease

.cursor-fade-enter, .cursor-fade-leave-to
	opacity: 0

#app
	font-family: "Source Code Pro", monospace !important
	font-size: 15px
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	background-color: #1e1e1e
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAEJklEQVRogdXaW08TQRTA8dO1u5PNviiFiIpG0CjeQdGoX6UQAiF8KhIeSF/4IBoviHdA5eI1JtLW+OBadtIxp+nQYXZntrDbdnYSbvNnApTt+dHQ3NjYGDDGGi/1ev2i4zhl3/ery8vLgGtqakrsVxzH+anpDxzHWV9YWKjath3VJxzH2dScb6dv+b5f0fQd3/d3ebegtS4AwKdarVb1PO8E7k5PTwsZRgFgTdPvA8Bj7PPz81H9DgA815xvt1di+q7nef2889/gCGNsq16v81sCe8F13XJz7zJjbEPT7zHGnvK+tLQExWJR7OOMsVXN+aje77ruboI+4LruL/wBhxlj2zzwt57nge/7Bdu2C4yxD5qON84zTT/LGHvZod5v2/aQpg9YlNI/oFiEkD5KaTm6NvowpXQrFFp9iFL6NRTS62copd9CodVPW/l8vswY6wtVgIsA8FHTb+M1r+k3AeBVSr0Qqq2+q+sW3l9KpVIll8uJX+QqDhz+QS6Xk/tDAHih6XcB4HWKvdxGL0T1PL6anJzEa7eSz+dPBEEwCADv5ZtD6KOlUumR2GZmZsSO0/iZ5nyS3hcEwYiil6O6hY7wRSkdJIT8lA8LfZQQsi7uzc7Oiv0CIWQzdDC9PtJGPzATRAdDzkkr5Nzc3Jz4GSHHpNWtXhH7scFBvCLhMgBs4IjFtbe39y8IAhzRfnPvHgA84X1xcfEfOif0cbxPas53oiMRf+M6OnjJYOeS9n7LcOeSdq2D3XQuaY9y8AZSoXKw284l7bKTEwDwBhQO9tK5NJwcxiuP78sO9tq5pH1Y52BWnFN1nBkrcucOmujcYfoYAKyqHLybYecKzceDr1TdyrhziR4PmuRcVG84p+nXkQqVg6Y5J/d95xQdB9JbUDioc8aEPiI6F9HRwRW+LztounOhx3tSRwe3xT3RwUw6Jyyk4oXKwSw6J/ZbOJCiusUPyzeH53nlWq1WMKDjN/9S0xvTVtWtGGeMd45S+j0UhG6yg205l1UH23Yurpvo4KGci+umOXho5+K6SQ4eybm4boqDR3YuCw4mcs50BxM7Z7KDqThnqoOpORfXe+Fgqs7F9W47mLpzcb2bDnbEubjeLQc75pwJDnbUuXYc/CJHvrLgXEw/hQ5WFI5kwjlNv4ZUiA6Kd9zMOKfoONDegeRgNYvORfTz4j9v03aw685J/TwhZEfcywvvc8dwAh0HgN/SebHj5VyVOndO1blTneo4rVflnpaDPXOuuYcD73VUj3OwL6b33Dk+rVUdHfwsR74IIWdjnOy5c5TSH6HQ6ifRwSpjLOpvO+6cykkjnNP0K/isSe5gVecgAMhOHnCu2ZVOdaDvO6foeLdaw3caU7RYLOIbdPB4EAT4TN9955pP8BadPOCc0COd6kA/4FxEP7c/EwDgP7aSCeGBS/bXAAAAAElFTkSuQmCC)
	background-origin: padding-box
	background-position: left top
	background-clip: border-box
	background-repeat: repeat
	background-attachment: scroll
	background-size: auto

#window
	margin-left: 10%
	margin-right: 10%
	margin-top: 5%
	margin-bottom: 5%
	-webkit-box-shadow: 0px 0px 64px 3px rgba(0, 0, 0, 0.75)
	box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.75)

.v-toolbar__content
	height: 45px !important

.shake-animation-active
	animation: shake 0.4s
	animation-iteration-count: 0.4s

@keyframes shake
	0%
		transform: translate(1px, 1px) rotate(0deg)
	10%
		transform: translate(-1px, -2px) rotate(-1deg)
	20%
		transform: translate(-3px, 0px) rotate(1deg)
	30%
		transform: translate(3px, 2px) rotate(0deg)
	40%
		transform: translate(1px, -1px) rotate(1deg)
	50%
		transform: translate(-1px, 2px) rotate(-1deg)
	60%
		transform: translate(-3px, 1px) rotate(0deg)
	70%
		transform: translate(3px, 1px) rotate(-1deg)
	80%
		transform: translate(-1px, -1px) rotate(1deg)
	90%
		transform: translate(1px, 2px) rotate(0deg)
	100%
		transform: translate(1px, -2px) rotate(-1deg)

/* own scrollbar */
/* Note: The -webkit-scrollbar is not supported by Firefox or IE and Edge. */
::-webkit-scrollbar
	/* width */
	width: 12px
::-webkit-scrollbar-track
	/* Track */
	box-shadow: inset 0 0 5px grey
	border-radius: 8px

::-webkit-scrollbar-thumb
	/* Handle */
	background: rgb(110, 110, 110)
	border-radius: 10px
::-webkit-scrollbar-thumb:hover
	/* Handle on hover */
	background: rgb(110, 110, 110)
::-webkit-scrollbar-track-piece
	/* not handle on */
	background: rgb(1, 1, 1)
</style>
