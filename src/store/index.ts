import Vue from 'vue';
import Vuex from 'vuex';
import bookList from '../assets/Data.json';

Vue.use(Vuex);

declare global {
  interface Window {
    store: any;
  }

  interface CartItem {
    id: number;
    quantity: number;
  }
}

window.store = new Vuex.Store({
  state: {
    products: bookList,
    cart: {
      items: Array<CartItem>()
    }
  },
  mutations: {
    initializeVuexStore(state) {
      // Check if the vuex store exists in local storage
      const locVuexStore = localStorage.getItem('vuexStore');

      if (locVuexStore) {
        this.replaceState(Object.assign(state, JSON.parse(locVuexStore)));
      } else {
        localStorage.clear();
        localStorage.setItem('vuexStore', JSON.stringify(state));
      }
    },
    addToCart(state, itemId: number): void {
      state.cart.items.push({
        id: itemId,
        quantity: 1
      });
    },
    setQuantity(state: any, { itemId, quantity }: { itemId: number; quantity: number }): void {
      (state.cart.items.find((itm: CartItem) => itm.id === itemId) as CartItem).quantity = quantity;
    },
    removeFromCart(state, itemId: number) {
      state.cart.items = state.cart.items.filter((itm: any) => itm.id !== itemId);
    },
    loadProducts(state, products: any[]) {
      state.products = products;
    }
  },
  actions: {},
  modules: {},
  getters: {
    subtotal(state, getters) {
      return state.cart.items.reduce((acc, item) => {
        acc += item.quantity * state.products.find(book => book.id === item.id)?.price;

        return acc;
      }, 0);
    },
    shipping(state, getters) {
      const shippingAndHandlingConstant = 0.149;

      return ~~(shippingAndHandlingConstant * getters.subtotal);
    },
    total(state, getters) {
      return getters.subtotal + getters.shipping;
    }
  }
});

export default window.store;

(function runOnlyOnce() {
  window.store.commit('initializeVuexStore');

  // Subscribe to store updates
  window.store.subscribe((mutation: any, state: any) => {
    localStorage.setItem('vuexStore', JSON.stringify(state));
  });
})();
