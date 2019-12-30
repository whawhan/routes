<template>
  <div>
    --------------form input ke database, tabel addresses---------------
    <form @submit.prevent="save">
      kota : <input type="text" v-model="form.city" /><br>
      negara : <input type="text" v-model="form.country" /><br>
      email user : <input type="email" v-model="form.email" /><br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data:()=>({
    form: {
      city: "",
      country: "",
      email: ""
    }
  }),

  methods: {
    async save() {
      const response = await axios.post("http://localhost:3000/alamat", this.form);
    }
  }

};
</script>