<template>
  <div class="home">
    <img alt="Shop" src="../assets/shopping_cart.png" />
    <BookCartHome msg="Welcome to BookCart" />
  </div>
</template>

<script>
// @ is an alias to /src
import BookCartHome from '@/components/BookCartHome.vue';

export default {
  name: 'Home',
  components: {
    BookCartHome
  }
};
</script>
