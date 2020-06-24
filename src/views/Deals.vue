<template>
    <div id="deals">
        Dealss
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'Deals',
    created() {
        this.getData()
    },
    methods: {
        ...mapActions(['getData'])
    }
}
</script>