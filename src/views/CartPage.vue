<template>
  <div class="cart-page">
    <img alt="Shop" class="shop-cart-logo" src="../assets/shopping_cart.png" />
    <Cart :cart="$store.state.cart" />
  </div>
</template>

<script>
import Cart from '@/components/Cart.vue';
import store from '../store';

export default {
  name: 'CartPage',
  store: store,
  data() {
    return {};
  },
  components: {
    Cart
  }
};
</script>

<style scoped lang="scss">
.shop-cart-logo {
  height: 100px;
}
</style>
