import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Singup from '../views/Singup.vue'
import DynTask from '../views/DynTask'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/about/:id',
    name: 'DynTask',
    component: DynTask
  },
  {
    path: '/singup',
    name: 'Singup',
    component: Singup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
