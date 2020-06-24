import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    meta: {
      layout: 'main',
      icon: 'mdi-view-dashboard',
      nav: 'main'
    },
    component: () => import('@/views/Dashboard.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    meta: {
      layout: 'main',
      nav: 'personal'
    },
    component: () => import('@/views/Personal.vue')
  },
  {
    path: '/deals',
    name: 'Deals',
    meta: {
      layout: 'main',
      icon: 'mdi-format-list-bulleted-square',
      nav: 'main'
    },
    component: () => import('@/views/Deals.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    meta: {
      layout: 'main',
      icon: 'mdi-shopping-outline',
      nav: 'main'
    },
    component: () => import('@/views/Orders.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    meta: {
      layout: 'empty',
      icon: 'mdi-format-list-bulleted-square',
      nav: 'personal'
    },
    component: () => import('@/views/Auth.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
