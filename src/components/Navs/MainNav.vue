<template>
    <v-navigation-drawer
        v-model="drawer"
        :mini-variant="mini"
        app
        clipped
        class="elevation-4"
    >

        <v-list-item class="px-2 person" :to="'/'">
            <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item
                v-for="item in routerList"
                :key="item.path"
                link
                :to="item.path"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.meta.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'MainNav',
    props: {
        mini: Boolean
    },
    data() {
        return {
            drawer: true,
            routes: this.$router.options.routes
        }
    },
    computed: {
        routerList() {
            const routes = [];
            for(let route of this.routes) {
                if(route.meta.nav === 'main') routes.push(route)
            }
            return routes
        },
    }
}
</script>
<style lang="sass" scoped>
    .person
        padding: 15px 0 15px
</style>