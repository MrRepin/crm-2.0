<template>
    <v-simple-table>
        <template v-slot:default>
            <tbody>
                <tr v-for="item in tableData" :key="item.name">
                    <td><img :src="item.flag" :alt="item.name"></td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.quant }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
export default {
    name: 'DefaultTable',
    props: {
        tableData: Array
    }
}
</script>