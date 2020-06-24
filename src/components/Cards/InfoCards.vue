<template>
    <v-container fluid class="info-cards">
        <v-row>
            <v-col v-for="card in cards" :key="card.number" class="info-card" md="3">
                <v-card>
                    <div
                        class="icon elevation-4"
                        :class="card.color"
                    >
                        <v-list-item-icon>
                            <v-icon>{{card.icon}}</v-icon>
                        </v-list-item-icon>
                    </div>
                    <div class="card-content">
                        <p class="name font-weight-light">{{card.name}}</p>
                        <p class="result font-weight-regular">{{card.info}}</p>
                    </div>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-actions>
                        <v-btn
                            :color="`${card.color} lighten-2`"
                            text
                        >
                            See more {{card.name}}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'InfoCards',
    props: {
        cards: Array
    }
}
</script>

<style lang="sass" scoped>
    .info-cards
        padding: 12px 0

    .info-card .v-card
        padding: 15px
        position: relative
        .icon
            padding: 20px
            position: absolute
            left: 15px
            top: -15px
            z-index: 3
            border-radius: inherit
            transition: all .2s ease-out
        .v-list-item__icon
            margin: 0
        .v-icon
            font-size: 40px
            color: #fff
        .card-content
            text-align: right
            padding-bottom: 15px
            p
                margin: 0
            .result
                font-size: 25px
        &:hover .icon
            top: -22px

    .v-card__actions
        padding: 8px 0 0 0
            
</style>