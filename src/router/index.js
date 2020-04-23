import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    meta: { keepAlive: true },
    component: Home,
    redirect:'/index',
    children:[
      {
        path: '/index',
        name: 'Index',
        meta: { keepAlive: true },
        component: () => import('../views/index/Index.vue')
      },
      {
        path: '/accountmanager',
        name: 'accountmanager',
        meta: { keepAlive: true },
        component: () => import('../views/accountmanager/AccountManager.vue')
      }
      ,
      {
        path: '/vouchQuery',
        name: 'VouchQuery',
        meta: { keepAlive: true },
        component: () => import('../views/vouchermanager/VouchQuery.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    meta: { keepAlive: true },
    component: () => import('../views/About.vue')
  }
  ,
  {
    path: '/login',
    name: 'Login',
    meta: { keepAlive: true },
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
