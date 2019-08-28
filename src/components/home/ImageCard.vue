<template>
    <v-card id="image-cards" color="accent">
        <v-img
            :src="imageSrc"
            width="200px"
            height="200px"
            :alt="titleName + ' profile picture'"
        ></v-img>
        <v-card-title id="v-card-title" primary-title>
            <div>
                <h3 class="headline mb-0">
                    {{ titleName }}
                    <a :href="linkHref" target="_blank">
                        <v-icon id="user-link">link</v-icon>
                    </a>
                </h3>
            </div>
        </v-card-title>
    </v-card>
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
