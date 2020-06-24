<template>
    <v-app>
        <component :is="layout">
            <router-view></router-view>
        </component>
    </v-app>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import EmptyLayout from '@/layouts/EmptyLayout'

export default {
    name: 'App',
    computed: {
        layout() {
            return (`${this.$route.meta.layout ? this.$route.meta.layout : 'empty'}-layout`)
        }
    },
    components: {
        MainLayout,
        EmptyLayout
    }
};
</script>

<style lang="sass">
    @import '@/assets/main.sass'
</style>