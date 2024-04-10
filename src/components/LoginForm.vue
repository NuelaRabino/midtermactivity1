<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label>Username: </label>
        <input type="text" v-model="username" required>
        <label>Password: </label>
        <input type="password" v-model="password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex'
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      ...mapActions(['authenticate']),
      login() {
        this.authenticate({ username: this.username, password: this.password })
        // Clear the input fields after login attempt
        this.username = ''
        this.password = ''
      }
    }
  }
  </script>
  