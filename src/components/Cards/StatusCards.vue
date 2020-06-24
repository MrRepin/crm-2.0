<template>
    <v-container fluid class="status-cards">
        <v-row>
            <StatusCard v-for="card in cards" :key="card.name" :cardData="card"/>
        </v-row>
    </v-container>
</template>

<script>
import StatusCard from '@/components/Cards/StatusCard'
export default {
    name: 'StatusCards',
    props: {
        cards: Array
    },
    components: {
        StatusCard
    }
}
</script>

<style lang="sass" scoped>
    .status-cards
        padding: 12px 0
        margin-top: 30px
</style>