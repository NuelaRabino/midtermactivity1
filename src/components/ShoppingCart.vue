<template>
  <div>
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.title }} - ${{ item.price }}
        <button @click="removeFromCart(index)">Remove</button>
      </li>
    </ul>
    <p>Total: ${{ totalPrice }}</p>
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
