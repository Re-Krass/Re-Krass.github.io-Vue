<template lang="pug">
v-list
	v-list-item.pb-2
		v-list-item-icon
			v-icon {{ icon }}
		v-list-item-content
			v-list-item-title#sadasdasasd {{ title }}
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

<style lang="sass" scoped></style>
