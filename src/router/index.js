import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Caricaturas from '../views/Caricaturas.vue'
import Podcasts from '../views/Podcasts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/caricaturas',
    name: 'Caricaturas',
    component: Caricaturas
  },
  {
    path: '/podcast',
    name: 'Podcasts',
    component: Podcasts
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
