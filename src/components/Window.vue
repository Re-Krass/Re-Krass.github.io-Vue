<template>
    <div>
        <div id="nav">
            <v-toolbar>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Re-Krass Homepage</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn flat>
                        <router-link to="/">Home</router-link>
                    </v-btn>
                    <!-- <v-btn flat>
                        <router-link to="/newsite">Newsite</router-link>
                    </v-btn> -->
                </v-toolbar-items>
            </v-toolbar>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
