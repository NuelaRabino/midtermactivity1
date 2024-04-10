<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold mb-4">Shopping Cart</h2>
    <div class="overflow-x-auto">
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">Book Name</th>
            <th class="px-4 py-2">Quantity</th>
            <th class="px-4 py-2">Price</th>
            <th class="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="index" class="border-b border-gray-300">
            <td class="px-4 py-2">{{ item.title }}</td>
            <td class="px-4 py-2">{{ item.quantity }}</td>
            <td class="px-4 py-2">₱{{ item.price }}</td>
            <td class="px-4 py-2">
              <button @click="removeFromCart(index)" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xl font-bold mt-4">Total: ₱{{ totalPrice }}</p>
    <div class="mt-4">
      <button @click="purchaseAll" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Purchase All</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['cartItems', 'totalPrice'])
  },
  methods: {
    ...mapMutations(['removeFromCart']),
    ...mapActions(['purchaseAll'])
  }
}
</script>