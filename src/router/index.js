import Vue from 'vue'
import VueRouter from 'vue-router'

import ProfileUser from '../views/ProfileUser.vue'
import ProfileTrainer from '../views/ProfileTrainer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/profileuser/:id',
    name: 'profileuser', //для роутеров
    component: ProfileUser,
    props: true
  },
  {
    path: '/profiletrainer/:id',
    name: 'profiletrainer',
    component: ProfileTrainer,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router
