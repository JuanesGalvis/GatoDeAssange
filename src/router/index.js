import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Caricaturas from '../views/Caricaturas.vue'
import Podcasts from '../views/Podcasts.vue'
import Suscripcion from '../views/Suscripcion.vue'

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
  {
    path: '/suscripcion',
    name: 'Suscripcion',
    component: Suscripcion
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
