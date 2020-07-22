<template>
  <div class="cart">
    <ul>
      <li class="cart-item-li" v-for="cartItem in cartItems" :key="cartItem.id">
        {{ cartItem.id }}:
        {{ cartItem.quantity }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '../store';

export default Vue.extend({
  name: 'Cart',
  data() {
    return {
      cartItems: store.state.cart.items
    };
  },
  props: {},
  components: {},
  methods: {
    // toggleInCart(bookId: number) {
    //   if (store.state.cart.items.map((itm: any) => itm.id).includes(bookId)) {
    //     store.commit('removeFromCart', bookId);
    //   } else {
    //     store.commit('addToCart', bookId);
    //   }
    // },
    // cartQuantity(bookId: number) {
    //   return (
    //     store.state.cart.items.find((item: any) => item.id === bookId) || {
    //       quantity: 0
    //     }
    //   ).quantity;
    // }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
