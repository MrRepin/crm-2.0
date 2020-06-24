import Vue from 'vue'
import Vuex from 'vuex'
import orders from './modules/orders'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    orders,
    auth
  }
})
