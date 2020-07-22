<template>
  <div class="product">
    <div class="details">
      <section class="title-and-author">
        <h2>{{ title }}</h2>
        <h3>By: {{ author }}</h3>
      </section>
      <section class="quantity" v-if="quantityInCart" :title="'quantityInCart: ' + quantityInCart">
        In Cart
      </section>
      <section class="price">${{ (price / 100).toFixed(2) }}</section>
    </div>
    <img
      :src="image.url.replace('{width}', image.width).replace('{height}', image.height)"
      :alt="title"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Product',
  props: {
    title: String,
    author: String,
    image: Object,
    price: Number,
    quantityInCart: Number
  }
});
</script>

<style scoped lang="scss">
.product {
  border: 1px solid #888;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  box-shadow: -1px 2px 4px #0008;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  .details {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2,
    h3 {
      margin: 0;
    }
    h3 {
      font-weight: normal;
    }
  }
  img {
    height: 200px;
    flex: 0;
  }
}
</style>
