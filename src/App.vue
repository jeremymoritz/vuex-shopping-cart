<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/products">Books</router-link>
      <router-link to="/cart-page">Cart</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1300px;
  margin: auto;
}

#nav {
  padding: 0;
  border: 1px solid #bbb;
  border-radius: 4px;
  display: inline-block;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    display: inline-block;
    padding: 0.5rem 1rem;

    &.router-link-exact-active {
      color: #b94283;
      background: #eee;
    }
    &:not(.router-link-exact-active):hover {
      background: lighten(#b94283, 40%);
    }
    + a {
      border-left: 1px solid #bbb;
    }
  }
}
</style>
