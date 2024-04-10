<template>
    <div>
      <h2>Available Books</h2>
      <ul>
        <li v-for="book in books" :key="book.id">
          {{ book.title }} - ${{ book.price }}
          <button @click="addToCart(book)">Add to Cart</button>
        </li>
      </ul>
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
  