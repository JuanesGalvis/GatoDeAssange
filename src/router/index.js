import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Caricaturas from '../views/Caricaturas.vue'
import Podcasts from '../views/Podcasts.vue'
import Suscripcion from '../views/Suscripcion.vue'
import Donar from '../views/Donar.vue'
import PedirCaricatura from '../views/PedirCaricatura.vue'
import PedirPodcast from '../views/PedirPodcast.vue'
import Articulo from '../views/Articulo.vue'
import NotFound from '../views/NotFound.vue'

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
  {
    path: '/donar',
    name: 'Donar',
    component: Donar
  },
  {
    path: '/pedir_caricatura',
    name: 'Pedir Caricatura',
    component: PedirCaricatura
  },
  {
    path: '/pedir_podcast',
    name: 'Pedir Podcast',
    component: PedirPodcast
  },
  {
    path: '/articulo/:id',
    name: 'Articulo',
    component: Articulo
  },
  {
    path: '/not_Found',
    name: 'Not Found',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
