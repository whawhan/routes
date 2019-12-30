<template>
<!--<button @click="$emit()" style="background: #3498db; color: white; padding: 4px 8px; border: 1px solid #fefefe;">-->
  <button @click="$emit('tekan')">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background: #3498db;
  color: white;
  padding: 4px 8px;
  border: 1px solid #fefefe;
}
</style>
