<template>
  <div class="book-list">
    <h2>Available Books</h2>
    <table>
      <thead>
        <tr>
          <th>Book Name</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.title }}</td>
          <td>₱{{ book.price }}</td>
          <td><button @click="addToCart(book)">Add to Cart</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['books'])
  },
  methods: {
    ...mapMutations(['addToCart'])
  }
}
</script>
