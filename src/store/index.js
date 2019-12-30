import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import users from './Users'
export default new Vuex.Store({
  state: {
    show_sidebar:true
  },
  mutations: {
    toggleSidebar(state){
      state.show_sidebar = !state.show_sidebar
    }

  },
  actions: {
  },
  modules: {
    users
  }
})
