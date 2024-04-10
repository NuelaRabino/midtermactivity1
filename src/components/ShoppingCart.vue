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
            <td class="px-4 py-2">
              <button @click="decrementQuantity(index)" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md">-</button>
              <span class="px-2">{{ item.quantity }}</span>
              <button @click="incrementQuantity(index)" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md">+</button>
            </td>
            <td class="px-4 py-2">₱{{ item.price }}</td>
            <td class="px-4 py-2">
              <button @click="confirmRemove(index)" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xl font-bold mt-4">Total: ₱{{ totalPrice }}</p>
    <div class="mt-4">
      <button @click="confirmPurchaseAll" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Purchase All</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
  computed: {
    ...mapGetters(['cartItems', 'totalPrice'])
  },
  methods: {
    ...mapMutations(['removeFromCart', 'incrementQuantity', 'decrementQuantity']),
    ...mapActions(['purchaseAll']),
    async confirmPurchaseAll() {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to purchase all items in your cart?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, purchase all!'
      })

      if (result.isConfirmed) {
        await this.purchaseAll()
        Swal.fire(
          'Purchased!',
          'All items have been purchased.',
          'success'
        )
      }
    },
    increaseQuantity(index) {
      this.incrementQuantity(index);
      this.calculateTotalPrice();
    },
    decrementQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.$store.commit('decrementQuantity', index);
        this.calculateTotalPrice();
      } else {
        this.confirmRemove(index);
      }
    },
    confirmRemove(index) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to remove this item from your cart?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, remove it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.removeFromCart(index);
          Swal.fire(
            'Removed!',
            'Your item has been removed from the cart.',
            'success'
          )
        }
      });
    },
    calculateTotalPrice() {
      // Calculate total price
    }
  }
}
</script>
