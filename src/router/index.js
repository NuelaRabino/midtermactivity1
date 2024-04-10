import { createRouter, createWebHistory } from 'vue-router'
import AdminPanel from '../components/AdminPanel.vue'

const routes = [
  {
    path: '/admin',
    name: 'AdminPanel',
    component: AdminPanel
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
