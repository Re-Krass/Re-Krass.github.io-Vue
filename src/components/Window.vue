<template lang="pug">
div
	#nav
		v-toolbar
			v-toolbar-side-icon
			v-toolbar-title Re-Krass Homepage
			v-spacer
			v-toolbar-items.hidden-sm-and-down
				v-btn(flat)
					router-link(to="/") Home
				//
					<v-btn flat>
					<router-link to="/newsite">Newsite</router-link>
					</v-btn>
	router-view

</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
