import firebase from 'firebase'

export default {
    actions: {
        async signIn({commit}, {email, password}) {
            try {
                const response = await firebase.auth().signInWithEmailAndPassword(email, password)
                commit('auth', response)
            } catch(e) {
                console.log(e)
                throw e
            }
        },
        async register({dispatch}, {email, password, name}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name,
                    email
                })
            } catch(e) {
                console.log(e)
                throw e
            }
        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout() {
            await firebase.auth().signOut()
        }
    },
    mutations: {
        auth: (state, data) => state.auth = data
    },
    state: {
        auth: ''
    },
    getters: {

    }
}