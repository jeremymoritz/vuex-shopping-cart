import Vue from 'vue';
import Vuex from 'vuex';
import bookList from '../assets/Data.json';

Vue.use(Vuex);

declare global {
  interface Window {
    store: any;
  }
}

window.store = new Vuex.Store({
  state: {
    products: bookList,
    cart: {
      items: []
    }
  },
  mutations: {
    initializeVuexStore(state) {
      // Check if the vuex store exists in local storage
      const locVuexStore = localStorage.getItem('vuexStore');
      console.log('initializing');

      if (locVuexStore) {
        this.replaceState(Object.assign(state, JSON.parse(locVuexStore)));
      } else {
        localStorage.clear();
        localStorage.setItem('vuexStore', JSON.stringify(state));
      }
    },
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

export default window.store;

(function runOnlyOnce() {
  window.store.commit('initializeVuexStore');

  // Subscribe to store updates
  window.store.subscribe((mutation: any, state: any) => {
    localStorage.setItem('vuexStore', JSON.stringify(state));
  });
})();
