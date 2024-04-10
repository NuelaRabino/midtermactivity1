<template>
  <div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <table>
      <thead>
        <tr>
          <th>Book Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartItems" :key="index">
          <td>{{ item.title }}</td>
          <td>{{ item.quantity }}</td>
          <td>₱{{ item.price }}</td>
          <td><button class="remove-button" @click="removeFromCart(index)">Remove</button></td>
        </tr>
      </tbody>
    </table>
    <p>Total: ₱{{ totalPrice }}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['cartItems', 'totalPrice'])
  },
  methods: {
    ...mapMutations(['removeFromCart'])
  }
}
</script>
