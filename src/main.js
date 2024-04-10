import { createApp } from 'vue'
import App from './App.vue'
import store from './store' // Import the Vuex store
import router from './router' // Import the router

createApp(App)
  .use(store) // Use the Vuex store
  .use(router) // Use the router
  .mount('#app')
