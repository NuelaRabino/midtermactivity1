<template>
  <div>
    <h2>Search Books</h2>
    <form @submit.prevent="searchBook">
      <input type="text" v-model="searchQuery" placeholder="Enter book title..."> |
      <button type="submit">Search</button>
    </form>

    <!-- Display search results in table format -->
    <div v-if="filteredBooks.length > 0">
      <h3>Search Results</h3>
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in filteredBooks" :key="index">
            <td>{{ book.title }}</td>
            <td>₱{{ book.price }}</td>
            <td><button @click="addToCart(book)">Add to Cart</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  computed: {
    filteredBooks() {
      return this.$store.getters.filteredBooks;
    }
  },
  methods: {
    searchBook() {
      this.$store.commit('setSearchQuery', this.searchQuery.trim());
    },
    addToCart(book) {
      this.$store.commit('addToCart', book);
    }

  }
};
</script>
