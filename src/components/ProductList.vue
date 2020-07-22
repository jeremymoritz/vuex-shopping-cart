<template>
  <div class="product-list">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <Product
          title="The Silmarillion2"
          author="J.R.R. Tolkien2"
          imageSrc="https://images.subsplash.com/image.jpg?id=96cd56f2-a3e8-4fa5-9ba0-ee274e62ac06&w=260&h=400"
          :price="888"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Product from '@/components/Product.vue';

export default Vue.extend({
  name: 'ProductList',
  props: {
    msg: String
  },
  components: {
    Product
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
