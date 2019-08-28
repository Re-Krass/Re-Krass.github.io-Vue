<template lang="pug">
v-list
	v-list-tile.pb-2
		v-list-tile-avatar#v-list-tile-avatar
			v-icon {{ icon }}
		v-list-tile-content
			v-list-tile-title {{ title }}
	// Description
	slot
		// ""

</template>

<script>
export default {
    name: "Section",
    props: {
        // Description
        icon: {
            type: String,
            default: "",
            name: {
                type: String,
                default: ""
            }
        },
        // Description
        title: {
            type: String,
            default: "",
            name: {
                type: String,
                default: ""
            }
        }
    }
};
</script>
