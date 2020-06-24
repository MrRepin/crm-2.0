<template>
    <div id="dashboard">
        <InfoCards :cards="infoCards" />
        <Chart :chart="chart" />
        <StatusCards :cards="statusCards" />
    </div>
</template>

<script>
import InfoCards from '@/components/Cards/InfoCards'
import Chart from '@/components/Charts/Chart'
import StatusCards from '@/components/Cards/StatusCards'
export default {
    name: "Dashboard",
    data: () => ({
        chart: {
            labels: ['Brasil', 'USA', 'Australia', 'Germany', 'UK'],
            datasets: [{
                responsive: true,
                label: '# of Votes',
                data: [2540, 1820, 1220, 834, 356],
                backgroundColor: [
                    'green',
                    'red',
                    'blue',
                    'purple',
                    'orange',
                    'yellow',
                ],
            }]
        },
        infoCards: [
            {
                name: 'Orders',
                icon: 'mdi-shopping-outline',
                info: '2134',
                color: 'blue'
            },
            {
                name: 'Sales',
                icon: 'mdi-currency-usd',
                info: '657',
                color: 'green'
            },
            {
                name: 'Returns',
                icon: 'mdi-repeat',
                info: '21',
                color: 'red'
            },
            {
                name: 'Messages',
                icon: 'mdi-forum',
                info: '329',
                color: 'orange'
            }
        ],
        statusCards: [
            {
                background: '#2192ed',
                data: {
                    name: 'Daily sales',
                    chart: {
                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        datasets: [{
                            responsive: true,
                            label: 'Daily sales',
                            data: [250, 341, 213, 240, 250, 300, 1200],
                            borderColor: '#fff',
                        }]
                    }
                },
            },
            {
                background: '#4caf50',
                data: {
                    name: 'Daily sales',
                    chart: {
                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        datasets: [{
                            responsive: true,
                            label: 'Daily sales',
                            data: [250, 341, 213, 240, 250, 300, 1200],
                            borderColor: '#fff'
                        }]
                    },
                },
            },
        ]
    }),
    components: {
        InfoCards,
        Chart,
        StatusCards
    }
}
</script>