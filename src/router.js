import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { // 路由的重定向
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue') // 路由懒加载
    },
    {
      path: '/kind',
      name: 'kind',
      component: () => import('@/views/kind/index.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/cart/index.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/user/index.vue')
    }
  ]
})
