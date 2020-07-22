<template>
  <div class="cart-page">
    <img alt="Shop" class="shop-cart-logo" src="../assets/shopping_cart.png" />
    <Cart />
  </div>
</template>

<script>
import Cart from '@/components/Cart.vue';

export default {
  name: 'CartPage',
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
