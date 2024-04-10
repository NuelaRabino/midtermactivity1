<template>
  <div class="login-container">
    <h2 class="login-title">Login</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username" class="input-label">Username:</label>
        <input id="username" type="text" v-model="username" required class="input-field">
      </div>
      <div class="form-group">
        <label for="password" class="input-label">Password:</label>
        <input id="password" type="password" v-model="password" required class="input-field">
      </div>
      <button type="submit" class="btn-login">Login</button>
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
      this.username = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.input-label {
  font-weight: bold;
  color: #333;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.btn-login {
  padding: 10px 20px;
  background: linear-gradient(to right, #009b22, #00b03e);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-login:hover {
  background: linear-gradient(to right, #007a18, #008d2d);
}
</style>