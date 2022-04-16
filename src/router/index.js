import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView/Home.vue'
import Mit from '@/views/Mit'
import notFound from '@/views/notFound'
import AboutUs from '@/views/AboutUs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mit/:slug',
    name: 'Mit',
    component: Mit
  },
  {
    path: '*',
    name: '404',
    component: notFound
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs
  }
]

const router = new VueRouter({
  routes
})

export default router
