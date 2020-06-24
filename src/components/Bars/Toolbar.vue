<template>
    <v-app-bar
        dense
        :flat="true"
        id="toolbar"
    >

        <v-app-bar-nav-icon @click="$emit('change-nav-size', !mini)" class="white elevation-4" />

        <v-toolbar-title class="mr-12 align-center">
            <span class="title">{{ pageTitle }}</span>
        </v-toolbar-title>

        <v-spacer />

        <v-btn icon class="white elevation-4 bell-button">
            <v-icon>mdi-bell</v-icon>
        </v-btn>

        <v-menu
            transition="slide-y-transition"
            bottom
            :offset-y="offset"
            :close-on-content-click="closeonclick"
        >
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" class="white elevation-4">
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="item in routerListPersonal"
                    :key="item.path"
                    :to="item.path"
                >
                    <v-list-item-title> {{ item.name }} </v-list-item-title>
                </v-list-item>
                <v-list-item to="#" @click="userLogout">
                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

    </v-app-bar>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    name: 'Toolbar',
    data() {
        return {
            offset: true,
            closeonclick: false,
            routes: this.$router.options.routes
        }
    },
    props: {
        mini: Boolean,
    },
    computed: {
        pageTitle() {
            return this.$route.name
        },
        routerListPersonal() {
            const routes = [];
            for(let route of this.routes) {
                if(route.meta.nav === 'personal') routes.push(route)
            }
            return routes
        },
    },
    methods: {
        ...mapActions(['logout']),
        async userLogout() {
            await this.logout()
            this.$router.push('/auth')
        }
    }
}
</script>

<style lang="sass" scoped>
    #toolbar
        margin-bottom: 40px

    .bell-button
        margin-right: 15px

</style>