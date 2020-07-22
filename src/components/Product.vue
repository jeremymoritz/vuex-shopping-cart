<template>
  <div class="product">
    <h2>{{ title }}</h2>
    <h3>By: {{ author }}</h3>
    <img :src="imageSrc" :alt="title" />
    <div class="price">${{ (price / 100).toFixed(2) }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Product',
  props: {
    title: String,
    author: String,
    imageSrc: String,
    price: Number
  }
});
</script>

<style scoped lang="scss"></style>
