import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mit from '@/views/Mit'
import notFound from '@/views/notFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
  }
]

const router = new VueRouter({
  routes
})

export default router
