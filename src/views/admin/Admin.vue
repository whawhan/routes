<template>
  <div class="about">
    <h1>Ini Halaman Admin</h1>
    <ul>
      <li><router-link :to="{name : 'home'}">Home</router-link></li>
      <li><router-link :to="{name : 'about'}">About</router-link></li>
      <li><router-link to="sfsfsd">404</router-link></li>
      <li><router-link to="/admin/Post">admin Post</router-link></li>
      <li><router-link to="/admin/Users">admin Users</router-link></li>
      <li><router-link to="/admin/Products">admin Products</router-link></li>
    <ul>
  </div>
</template>
