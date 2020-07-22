<template>
  <div class="product-list">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="book in books" :key="book.id" @click="toggleInCart(book.id)">
        <Product
          :title="book.title"
          :author="book.author"
          :image="book.image"
          :price="book.price"
          :quantityInCart="cartQuantity(book.id)"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Product from '@/components/Product.vue';
import store from '../store';

export default Vue.extend({
  name: 'ProductList',
  data() {
    return {
      books: store.state.products
    };
  },
  props: {
    msg: String
  },
  components: {
    Product
  },
  methods: {
    toggleInCart(bookId: number) {
      if (store.state.cart.items.map((itm: any) => itm.id).includes(bookId)) {
        store.commit('removeFromCart', bookId);
      } else {
        store.commit('addToCart', bookId);
      }
    },
    cartQuantity(bookId: number) {
      return (
        store.state.cart.items.find((item: any) => item.id === bookId) || {
          quantity: 0
        }
      ).quantity;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-list ul {
  display: grid;
  grid-gap: 1rem;

  li {
    list-style-type: none;
  }
}

@media (min-width: 768px) {
  .product-list ul {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1200px) {
  .product-list ul {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
