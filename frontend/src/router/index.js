import { createRouter, createWebHistory } from 'vue-router'
import Clients from '../views/Clients.vue'
import ClientView from '../views/ClientView.vue'
import ShelterView from '@/views/ShelterView.vue'
import SheltersView from '@/views/SheltersView.vue'
import Animals from '@/views/Animals.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Clients
  },
  {
    path: '/clients/:clientId',
    name: 'ClientView',
    component: ClientView
  },
  {
    path: '/shelters/:shelterId/animal-list',
    name: 'Animals',
    component: Animals
  },
  {
    path: '/shelters/:shelterId',
    name: 'ShelterView',
    component: ShelterView
  },
  {
    path: '/shelters',
    name: 'SheltersView',
    component: SheltersView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
