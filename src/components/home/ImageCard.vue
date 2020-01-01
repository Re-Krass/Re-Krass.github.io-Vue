<template lang="pug">
v-card#image-cards(color="accent")
	v-img(:src="imageSrc" width="200px" height="200px" :alt="titleName + ' profile picture'")
	v-card-title#v-card-title(primary-title)
		div
			h3.headline.mb-0
				| {{ titleName }}
				a(:href="linkHref" target="_blank")
					v-icon#user-link.pl-1 link
</template>

<script>
export default {
    name: "ImageCard",
    props: {
        // Description
        imageSrc: {
            type: String,
            default: "",
            name: {
                type: String,
                // required: true,
                default: ""
            }
        },
        // Description
        titleName: {
            type: String,
            default: "",
            name: {
                type: String,
                // required: true,
                default: ""
            }
        },
        // Description
        linkHref: {
            type: String,
            default: "",
            name: {
                type: String,
                // required: true,
                default: ""
            }
        }
    }
};
</script>

<style lang="sass" scoped>
#user-link
    color: rgb(49, 154, 227)

#image-cards
    width: 200px
    height: 100%

#image
    height: 200px
    width: 100%
</style>
