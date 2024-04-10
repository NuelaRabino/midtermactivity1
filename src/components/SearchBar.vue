<template>
    <div>
      <h2>Search Books</h2>
      <form @submit.prevent="searchBook">
        <input type="text" v-model="searchQuery" placeholder="Enter book title...">
        <button type="submit">Search</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      searchBook() {
        // Tawagin ang isang action na i-search ang mga aklat batay sa searchQuery
        // Halimbawa:
        // this.$store.dispatch('searchBooks', this.searchQuery);
        this.$store.commit('setSearchQuery', this.searchQuery.trim());
      }
    }
  };
  </script>
  