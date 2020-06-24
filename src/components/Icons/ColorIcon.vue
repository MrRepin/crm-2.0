<template>
    <div
        class="icon color-bg-icon elevation-4 green"
    >
        <v-list-item-icon>
            <v-icon>{{icon}}</v-icon>
        </v-list-item-icon>
    </div>
</template>

<script>
export default {
    name: 'ColorIcon',
    props: {
        icon: String
    }
}
</script>

<style lang="sass" scoped>
    .color-bg-icon
        border-radius: 4px
        position: absolute
        left: 15px
        top: -15px
        padding: 20px
        z-index: 3
        transition: all .2s ease-out

        .v-list-item__icon
            margin: 0 !important
        .v-icon
            font-size: 30px
            color: #fff
</style>