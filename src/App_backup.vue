<template>
  <div>
    <h1>Training</h1>
    <h2>Vue.js</h2>
    <div>
        <!--{{message}}-->
    </div>
    <div>
      Name: <input type="text" v-model="form.name" @keyup="addToCart">
    </div>
    <div>
      Harga: <input type="number" v-model.number="form.price" @keyup="addToCart">
    </div>
    <div>
      <button @click="addToCart">Add</button>
      <button @click="pop()">&times; Hapus Pop</button>
    </div>
    <ul>
      <li v-for="(cart, index) in carts" :key="index">
        {{ cart.name }} - {{ cart.price }}
        <input type="number" v-model.number="cart.price">
        <button @click="remove(cart)">&times;</button>
      </li>
       Total harga: {{ grandTotal }} <br>
      Design By: {{firstName}} {{lastName}}
      <br>
      <br>
      <br>
      <li v-for="(add, index) in alamat" :key="index">
         {{add.city}} - {{add.email}}
      </li> 
    </ul>

<!--
<br>
<br>----------------------------------------------------------------form input ke database, tabel addresses----------------------------------------------------------------
    <form @submit.prevent="save">
      kota : <input type="text" v-model="form.city" /><br>
      negara : <input type="text" v-model="form.country" /><br>
      email user : <input type="email" v-model="form.email" /><br>
      <button type="submit">Submit</button>
    </form> -->



  </div>
</template>

<script>
import axios from 'axios'
import { parse } from 'path'
export default{
  data:()=>({
    // message : 'hello'
    alamat:[],

    carts:[
      {id : 1, name:"jepang", price:"20000"},
      {id : 2, name:"korea", price:"1000"},
      {id : 3, name:"inggris", price:"32000"}
    ],

    firstName : "whawhan",
    lastName : "sarwoko",
    total: 0,
    form: {
      name: '',
      price: 0,
    },

    form: {
      city: "",
      country: "",
      email: ""
    }


  }),

  async mounted(){
    const response = await axios.get('http://localhost:3000/alamat')
    this.alamat = response.data
  },

  computed: {
    grandTotal() {
      return this.carts
        .map(cart => cart.price)
        .reduce((a, b) => parseInt(a) + parseInt(b), 0);
    },

    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  },

  methods: {
    addToCart() {
      this.carts.push({
        name: this.form.name,
        price: this.form.price,
      })
      this.form.name = ''
      this.form.price = 0
    },

    remove(cart) {
      const index = this.carts.indexOf(cart)
      this.carts.splice(index, 1)
    },

    pop() {
      this.carts.pop()
    },

    async save() {
      const response = await axios.post("http://localhost:3000/alamat", this.form);
    }
  }










  

}  
</script>  