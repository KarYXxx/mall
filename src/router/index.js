import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      showBotton:true,
    }
  },
  {
    path: '/cat',
    name: 'Cat',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cat.vue'),
    meta:{
      showBotton:true,
    }
  },
  {
    path: '/car',
    name: 'Car',
    component: () => import(/* webpackChunkName: "about" */ '../views/Car.vue'),
    meta:{
      showBotton:true,
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/Car.vue'),
    meta:{
      showBotton:true,
    }
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue'),
    meta:{
      showBotton:true,
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      showBotton:true,
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
  
]

const router = new VueRouter({
  routes,
  linkActiveClass:"fnav_on",
})

export default router
