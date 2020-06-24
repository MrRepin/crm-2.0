import axios from 'axios'

export default {
    actions: {
        getData({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => {
                console.log(response.data)
                commit('setTodos', response)
            })
            .catch(() => {
                console.log('No data')
            })
        }
    },
    mutations: {
        setTodos: (state, data) => state.todos = data
    },
    state: {
        todos: []
    },
    getters: {

    }
}