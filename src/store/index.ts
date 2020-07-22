import Vue from 'vue';
import Vuex from 'vuex';
import bookList from '../assets/Data.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: bookList,
    cart: {
      items: []
    }
  },
  mutations: {
    addToCart(state, itemId: number) {
      console.log(`adding id #${itemId}`);
      state.cart.items.push({
        id: itemId,
        quantity: 1
      });

      console.log('current cart', state.cart);
    },
    removeFromCart(state, itemId: number) {
      console.log(`removing id #${itemId}`);
      state.cart.items = state.cart.items.filter((itm: any) => itm.id !== itemId);
    },
    loadProducts(state, products: any[]) {
      state.products = products;
    }
  },
  actions: {},
  modules: {},
  getters: {}
});
