<template>
  <div class="cart">
    <h1>Your Cart</h1>
    <section v-if="!cart.items.length">
      <h2><i class="fa fa-frown-o"></i>Your Cart Is Empty.<i class="fa fa-frown-o"></i></h2>
      <h3>
        Please check out our vast selection of <router-link to="/products">Books</router-link> to
        fill your cart!
      </h3>
    </section>
    <section v-else>
      <table class="cart-table">
        <thead>
          <tr>
            <th class="book-info">Cart</th>
            <th class="quantity-info">Quantity</th>
            <th class="price-info">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cartItem in cart.items" :key="cartItem.id">
            <td class="book-info">
              <div class="book-info-box">
                <img
                  :src="
                    getBook(cartItem.id)
                      .image.url.replace('{width}', getBook(cartItem.id).image.width)
                      .replace('{height}', getBook(cartItem.id).image.height)
                  "
                  :alt="getBook(cartItem.id).title"
                />
                <div class="details">
                  <section class="title-and-author">
                    <h2>{{ getBook(cartItem.id).title }}</h2>
                    <h3>By: {{ getBook(cartItem.id).author }}</h3>
                  </section>
                </div>
              </div>
            </td>
            <td class="quantity-info">
              <div class="quantity-box">
                <div class="current-quantity">{{ cartItem.quantity }}</div>
                <button
                  class="quantity-changer incrementer"
                  @click="incrementQuantity(cartItem.id)"
                >
                  <i class="fa fa-plus"></i>
                </button>
                <button
                  class="quantity-changer decrementer"
                  @click="decrementQuantity(cartItem.id)"
                >
                  <i class="fa fa-minus"></i>
                </button>
              </div>
              <button class="remove-link" @click="removeFromCart(cartItem.id)">Remove</button>
            </td>
            <td class="price-info">{{ displayPrice(getBook(cartItem.id).price) }}</td>
          </tr>
        </tbody>
      </table>
      <div class="totals">
        <table class="totals-table">
          <tbody>
            <tr>
              <th>Subtotal</th>
              <td>{{ displayPrice($store.getters.subtotal) }}</td>
            </tr>
            <tr>
              <th>S&amp;H</th>
              <td>{{ displayPrice($store.getters.shipping) }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th>{{ displayPrice($store.getters.total) }}</th>
            </tr>
          </tfoot>
        </table>
        <button class="checkout-button" @click="checkout()">Checkout</button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '../store';

export default Vue.extend({
  name: 'Cart',
  store: store,
  data() {
    return {};
  },
  props: ['cart'],
  components: {},
  methods: {
    toggleInCart(bookId: number) {
      if (store.state.cart.items.map((itm: CartItem) => itm.id).includes(bookId)) {
        store.commit('removeFromCart', bookId);
      } else {
        store.commit('addToCart', bookId);
      }
    },
    incrementQuantity(bookId: number) {
      let currentQuantity: number = store.state.cart.items.find(
        (itm: CartItem) => itm.id === bookId
      ).quantity;

      store.commit('setQuantity', { itemId: bookId, quantity: ++currentQuantity });
    },
    decrementQuantity(bookId: number) {
      let currentQuantity: number = store.state.cart.items.find(
        (itm: CartItem) => itm.id === bookId
      ).quantity;

      store.commit('setQuantity', { itemId: bookId, quantity: Math.max(--currentQuantity, 0) });
    },
    removeFromCart(bookId: number) {
      store.commit('removeFromCart', bookId);
    },
    cartQuantity(bookId: number) {
      return (
        store.state.cart.items.find((itm: CartItem) => itm.id === bookId) || {
          quantity: 0
        }
      ).quantity;
    },
    getBook(bookId: number) {
      return store.state.products.find((book: any) => book.id === bookId);
    },
    displayPrice(priceInPennies: number) {
      return `$${(priceInPennies / 100).toFixed(2)}`;
    },
    checkout() {
      alert('Check me out!');
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cart-table {
  margin: auto;
  width: 100%;
  border-collapse: collapse;

  td,
  th {
    border-bottom: 1px solid #888;
    padding: 1.5rem;

    &.book-info {
      text-align: left;
    }
    &.quantity-info {
      text-align: center;
    }
    &.price-info {
      text-align: right;
    }
  }
  th {
    font-weight: bold;
    font-size: 2rem;
  }
}
.book-info-box {
  display: flex;

  img {
    height: 250px;
    box-shadow: -1px 2px 8px #0008;
  }
  .details {
    margin-left: 2rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2,
    h3 {
      margin: 0 0 0.5rem;
    }
    h3 {
      font-weight: normal;
    }
  }
}
.price-info {
  font-weight: bold;
  font-size: 2rem;
}
.quantity-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #ccc;
  box-shadow: -1px 2px 5px #0004;
  border-radius: 8px;
  max-width: 6rem;
  margin: auto;

  .current-quantity {
    grid-row: 1 / 3;
    align-self: center;
    padding: 0.5rem 1rem;
    min-width: 1.5rem;
    font-size: 1.25rem;
    font-weight: bold;
  }
  button.quantity-changer {
    appearance: none;
    border-color: transparent;
    background: #fff;
    border-width: 0;
    padding: 0.5rem;
    border-left: 1px solid #ccc;
    cursor: pointer;
    color: #444;

    &:hover {
      background: #eee;
    }
    &.incrementer {
      border-bottom: 1px solid #ccc;
      border-top-right-radius: 8px;
    }
    &.decrementer {
      border-bottom-right-radius: 8px;
    }
  }
}
button.remove-link {
  appearance: none;
  border: 0;
  background: 0;
  text-decoration: none;
  color: #666;
  font-size: 1.25rem;
  margin-top: 0.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #c44;
  }
}
.totals {
  font-size: 1.5rem;
  width: 100%;
  max-width: 500px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: -1px 2px 5px #0004;
  padding: 1rem;
  margin: 1rem auto;

  .totals-table {
    width: 100%;
    margin-bottom: 0.5rem;

    th {
      text-align: left;
      padding: 0.5rem 0;
    }
    td {
      text-align: right;
    }
    tfoot th {
      border-top: 1px solid #888;

      &:last-child {
        text-align: right;
      }
    }
  }
  .checkout-button {
    display: block;
    width: 90%;
    padding: 1rem;
    margin: 0 auto;
    border-radius: 6px;
    border: 0;
    background: #40c;
    color: #fff;
    font-size: 1.75rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: lighten(#40c, 10%);
      box-shadow: -1px 2px 5px #0008;
    }
  }
}
</style>
