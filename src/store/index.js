// store/index.js
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      books: [
        { id: 1, title: 'Intro to Computing', price: 1000 },
        { id: 2, title: 'Python for Beginners', price: 350 },
        { id: 3, title: 'Mathematics in the Modern World', price: 450 },
        { id: 4, title: 'Earth and Life Science', price: 400 },
        { id: 5, title: 'Noli Me Tangere', price: 200 },
        { id: 6, title: 'El Filibusterismo', price: 250 },
        { id: 7, title: 'Ibong Adarna', price: 200 },
        { id: 8, title: 'Romeo and Juliet', price: 300 },
        { id: 9, title: 'Java for Beginners', price: 800 },
        { id: 10, title: 'English Book for Grade 1', price: 150 },
        // Add more books here
      ],
      cart: [],
      isAuthenticated: false,
      user: null,
      users: [
        { id: 1, name: 'Administrator', username: 'administrator', password: 'admin123', status: 'verified' },
        { id: 2, name: 'Nuela Rabino', username: 'nrabino', password: 'nrabino123', status: 'verified' },
        { id: 3, name: 'Harvey Gana', username: 'hgana', password: 'hgana123', status: 'for_verification' }
        // Add more users here
      ]
    }
  },
  mutations: {
    addToCart(state, book) {
      state.cart.push(book)
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1)
    },
    updateAuthenticationStatus(state, status) {
      state.isAuthenticated = status
    },
    setUser(state, user) {
      state.user = user
    },
    updateUserStatus(state, { userId, newStatus }) {
      const userIndex = state.users.findIndex(user => user.id === userId)
      if (userIndex !== -1) {
        state.users[userIndex].status = newStatus
      }
    }
  },
  actions: {
    purchase() {
      // Handle purchase transactions asynchronously
      // Example: Here you can simulate a purchase by updating inventory, deducting amount from user's account, etc.
    },
    authenticate({ commit, state }, credentials) {
      const user = state.users.find(user => user.username === credentials.username && user.password === credentials.password)
      if (user) {
        commit('updateAuthenticationStatus', true)
        commit('setUser', user)
      }
    },
    // Remove commit argument since it's not used
    changeUserStatus() {
      // Remove unused arguments from this action
    }
  },
  getters: {
    availableBooks: state => state.books,
    cartItems: state => state.cart,
    totalPrice: state => state.cart.reduce((total, item) => total + item.price, 0),
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user,
    userAccounts: state => state.users
  }
})

export default store
