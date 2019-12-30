<template>
    <div>
        <!-- <button @click="toggleSidebar">Show / Hide</button> -->
        <button @click="getUsers">Reload User List</button>
        <!-- <aside v-if="$store.state.show_sidebar"> ini sidebar </aside> -->
        {{ users }}
        {{ $store.state.users }}
    </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
// export default{
//     methods :{
//         toggleSidebar(){
//             this.$store.commit('toggleSidebar')
//         }
//     }
// }

export default {
  computed: {
    ...mapState({
      users: 'users/users'
    }),
  },

//   mounted() {
//     this.getUsers()
//   },

  methods: {
    ...mapMutations(['toggleSidebar']),
    ...mapActions({
      getUsers: 'users/fetchUsers'
    }),
    // ...mapActions(['users/fetchUsers']),
    // setMessage(value) {
    //   this.message = value
    // }
  }
}
</script>
  