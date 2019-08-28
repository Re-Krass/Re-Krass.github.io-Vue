<template lang="pug">
v-card#theme-card(color="accent" height="100%" tile)
	v-card-title(primary-title)
		div
			h3#theme-card-headline.headline.mb-0 {{ headline }}
			.mt-4 {{ content }}
	v-card-actions#v-card-actions
		v-tooltip(v-if="showTooltip" bottom color="#424242")
			template(v-slot:activator="{ on }")
				v-btn(block raised color="success" :href="link" target="_blank" v-on="on")
					| {{
					| buttonText
					| }}
			span coming soon™
		v-btn(v-else block raised color="success" :href="link" target="_blank") {{buttonText}}
</template>

<script>
export default {
    name: "ThemeCard",
    props: {
        // Description
        headline: {
            type: String,
            default: "",
            name: {
                type: String,
                default: ""
            }
        },
        // Description
        content: {
            type: String,
            default: "",
            name: {
                type: String,
                default: ""
            }
        },
        // Description
        buttonText: {
            type: String,
            default: "",
            name: {
                type: String,
                default: ""
            }
        },
        // Description
        link: {
            type: String,
            default: "",
            name: {
                type: String,
                default: ""
            }
        },
        // Description
        showTooltip: {
            type: Boolean,
            default: false,
            name: {
                type: Boolean,
                default: false
            }
        }
    }
};
</script>

<style lang="sass" scoped>
.v-card
    display: flex
    flex-direction: column
    justify-content: space-between
</style>
