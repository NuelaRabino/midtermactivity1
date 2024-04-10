<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold mb-4">Search Books</h2>
    <form @submit.prevent="searchBook" class="mb-4 flex items-center">
      <input type="text" v-model="searchQuery" placeholder="Enter book title..." class="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
      <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Search</button>
    </form>

    <!-- Display search results in table format -->
    <div v-if="filteredBooks.length > 0">
      <h3 class="text-xl font-bold mb-2">Search Results</h3>
      <div class="overflow-x-auto">
        <table class="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-200">
              <th class="px-4 py-2">Book Name</th>
              <th class="px-4 py-2">Price</th>
              <th class="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(book, index) in filteredBooks" :key="index" class="border-b border-gray-300">
              <td class="px-4 py-2">{{ book.title }}</td>
              <td class="px-4 py-2">₱{{ book.price }}</td>
              <td class="px-4 py-2"><button @click="addToCart(book)" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Add to Cart</button></td>
            </tr>
          </tbody>
        </table>
      </div>
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