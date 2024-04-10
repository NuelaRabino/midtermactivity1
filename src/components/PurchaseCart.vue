<template>
    <div class="max-w-lg mx-auto p-4">
      <h2 class="text-2xl font-semibold mb-4">Purchase Cart</h2>
      <div v-if="cartItems.length === 0" class="text-gray-600">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="(item, index) in cartItems" :key="index" class="mb-4 flex items-center justify-between border-b border-gray-300 pb-2">
            <div>
              <span class="font-semibold">{{ item.title }}</span>
              <span class="text-sm ml-2">Quantity: {{ item.quantity }}</span>
            </div>
            <button @click="purchaseItem(item)" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Purchase</button>
          </li>
        </ul>
        <div class="mt-4">
          <button @click="purchaseAll" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Purchase All</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions, mapMutations } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['cartItems'])
    },
    methods: {
      ...mapActions(['purchaseItem']),
      ...mapMutations(['removeFromCart']),
      async purchaseItem(item) {
        try {
          // Call the action to purchase an individual item
          await this.purchaseItemAction(item);
          // If purchase successful, remove the item from the cart
          this.removeFromCart(item);
        } catch (error) {
          console.error('Error purchasing item:', error);
        }
      },
      purchaseAll() {
        // Call the action to purchase all items in the cart
        this.purchaseAllAction();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles here if needed */
  </style>  