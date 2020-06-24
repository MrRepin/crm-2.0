import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)

firebase.initializeApp({
    apiKey: "AIzaSyAZhz2-gO6zRE8QPLKlsTqkcwS2jI-LJ5w",
    authDomain: "vue-crm-f6284.firebaseapp.com",
    databaseURL: "https://vue-crm-f6284.firebaseio.com",
    projectId: "vue-crm-f6284",
    storageBucket: "vue-crm-f6284.appspot.com",
    messagingSenderId: "560148481866",
    appId: "1:560148481866:web:854db52652ec5624abe3b3"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})