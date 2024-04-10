<template>
  <div id="app">
    <router-view></router-view>
    <template v-if="!isAuthenticated">
      <LoginForm />
    </template>
    <template v-else>
      <div>
        <h2>Welcome, {{ user.name }}</h2>
        <p>Status: {{ user.status }}</p>
        <template v-if="user.status !== 'for_verification'">
          <BookList />
          <SearchBar />
          <ShoppingCart v-if="user.status === 'verified'" />
        </template>
        <p v-else>Please wait for verification to access the shopping cart.</p>
        <AdminPanel v-if="user.username === 'admin'" />
        <button @click="logout">Log Out</button> <!-- Log out button for all users -->
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LoginForm from './components/LoginForm.vue'
import BookList from './components/BookList.vue'
import SearchBar from './components/SearchBar.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import AdminPanel from './components/AdminPanel.vue'

export default {
  name: 'App',
  components: {
    LoginForm,
    BookList,
    SearchBar,
    ShoppingCart,
    AdminPanel
  },
  computed: {
    ...mapState(['isAuthenticated', 'user'])
  },
  methods: {
    logout() {
      this.$store.commit('updateAuthenticationStatus', false);
      this.$store.commit('setUser', null);
      this.$router.push('/login');
    }
  }
}
</script>


