<template>
    <v-col class="info-card" md="6">
        <v-card>
            <div class="chart elevation-4" :style="`background: ${cardData.background}`">
                <canvas ref="canvas"></canvas>
            </div>
            <div class="controls">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn icon @click="forceUpdate" v-on="on">
                            <v-icon>mdi-cached</v-icon>
                        </v-btn>
                    </template>
                    <span>Update the data</span>
                </v-tooltip>    
            </div>
            <div class="information">
                <p class="font-weight-light">{{cardData.data.name}}</p>
            </div>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
                <v-icon>mdi-clock-outline</v-icon>
                <p class="font-weight-light">Last update: {{dateUpdate}}</p>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
import {Line} from 'vue-chartjs'
export default {
    name: 'StatusCard',
    extends: Line,
    props: {
        cardData: Object
    },
    data: () => ({
        chartOptions: {
            legend: {
                display: false,
                labels: {
                    fontColor: '#fff'
                }
            },
            title: {
                fontColor: '#fff',
            }     ,
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: '#fff',
                    },
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#fff',
                    },
                }]
            } 
        },
        dateUpdateStart: `${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getDate()} ${new Date().getSeconds()}`
    }),
    computed: {
        dateUpdate() {
            return this.dateUpdateStart
        }
    },
    mounted() {
        this.renderChart(this.cardData.data.chart, this.chartOptions)
    },
    methods: {
        forceUpdate() {
            this.cardData.data.chart.datasets[0].data[0] += 100;
            this.renderChart(this.cardData.data.chart, this.chartOptions)
            this.dateUpdateStart = `${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getDate()} ${new Date().getSeconds()}`
        }
    }
}
</script>

<style lang="sass" scoped>
    %block-size
        position: relative
        width: 92%
        left: 4%

    .info-card
        .v-card
            &:hover
                .chart
                    top: -70px

    .chart
        @extend %block-size
        padding: 30px
        border-radius: 4px
        top: -20px
        z-index: 1
        transition: all .2s ease-out
    
    .info-card
        position: relative

    .controls
        width: max-content
        margin: -52px auto 0
        .v-icon
            font-size: 34px

    .information
        @extend %block-size
        margin-top: 20px

        .font-weight-light
            font-size: 24px
    
    .v-card__actions
        @extend %block-size
        padding: 8px 0

        p
            position: relative
            top: 8px
            margin-left: 8px
</style>