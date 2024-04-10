<template>
  <div id="app" class="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-8">
    <router-view></router-view>
    <template v-if="!isAuthenticated">
      <LoginForm class="mt-4" />
    </template>
    <template v-else>
      <div class="max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Welcome, {{ user.name }}</h2>
        <p class="mb-4">Status: {{ user.status }}</p>
        <template v-if="user.status !== 'for_verification'">
          <BookList />
          <SearchBar />
          <ShoppingCart v-if="user.status === 'verified'" />
        </template>
        <p v-else class="text-red-500 mb-4">Please wait for verification to access the shopping cart.</p>
        <AdminPanel v-if="user.username === 'admin'" />
        <button @click="logout" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md">Log Out</button> <!-- Log out button for all users -->
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