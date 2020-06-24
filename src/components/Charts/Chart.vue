<template>
    <v-container fluid class="chart">
        <v-row>
            <v-col class="md-12">
                <v-card class="chart-card">
                    <v-row>
                        <v-col class="md-6">
                            <ColorIcon icon="mdi-earth" />
                            <p class="text-left title font-weight-light">Total sales by country</p>
                            <DefaultTable :tableData="countries" />
                        </v-col>
                        <v-col class="md-6">
                            <canvas id="chart" ref="canvas"></canvas>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {Doughnut} from 'vue-chartjs'
import DefaultTable from '@/components/Tables/DefaultTable'
import ColorIcon from '@/components/Icons/ColorIcon'
export default {
    name: 'GlobalMap',
    extends: Doughnut,
    props: {
        chart: Object
    },
    mounted () {
        this.renderChart(this.chart)
    },
    data: () => ({
        countries: [
            {
                name: 'Brasil',
                quant: 3890,
                flag: require('@/assets/img/brasil.png'),
                color: 'red'
            },
            {
                name: 'USA',
                quant: 2540,
                flag: require('@/assets/img/usa.png'),
                color: 'blue'
            },
            {
                name: 'Australia',
                quant: 1820,
                flag: require('@/assets/img/australia.png'),
                color: 'green'
            },
            {
                name: 'Germany',
                quant: 1220,
                flag: require('@/assets/img/germany.png'),
                color: 'black'
            },
            {
                name: 'UK',
                quant: 834,
                flag: require('@/assets/img/uk.png'),
                color: 'green'
            },
            {
                name: 'Romania',
                quant: 356,
                flag: require('@/assets/img/romania.png'),
                color: 'yellow'
            }
        ],
    }),
    components: {
        DefaultTable,
        ColorIcon
    }
}
</script>
<style lang="sass" scoped>
    .title
        font-size: 20px
        margin-left: 84px

    .chart
        padding: 0
        margin-top: 30px

    .chart-card
        padding: 15px
        position: relative
</style>