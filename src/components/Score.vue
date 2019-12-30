<template>
  <div style="background: #cecece; padding: 10px; margin: 20px;">
    {{ value }}

    <div>
      <MyButton @tekan="minus">-</MyButton>
      <MyButton @tekan="plus">+</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "./MyButton";
export default {
  components: {
    MyButton
  },

  props: [
    'value'
  ],

  methods: {

    plus() {
      this.$emit('update', this.value + 1)
    },

    minus() {
      this.$emit('update', this.value - 1)
    },

  }
}
</script>
