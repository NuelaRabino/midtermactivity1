<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login" class="login-form">
      <label for="username">Username:</label>
      <input id="username" type="text" v-model="username" required>
      <label for="password">Password:</label>
      <input id="password" type="password" v-model="password" required>
      <br>
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
