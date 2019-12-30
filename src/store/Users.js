import axios from 'axios'

export default {
  namespaced: true,
  state: {
    users: [],
    show_sidebar:true
  },
  mutations: {
    updateUserList(state, value) {
        // console.log(value);
        
      state.users = value
    }
  },
  actions: {
    async fetchUsers({commit}) {
        // console.log('asds')
      const response = await axios.get('http://localhost:3000/users')
      console.log(response.data)
      commit('updateUserList', response.data)
    }
  }
//   async asd() {
//     await = dispatch('fetchUsers')
//   }
}
