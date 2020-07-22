<template>
  <div class="products">
    <img alt="Vue logo" src="../assets/shopping_cart.png" />
    <ProductList msg="A List of Available Books" />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'Products',
  components: {
    ProductList
  }
};
</script>
