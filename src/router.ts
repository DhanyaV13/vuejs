/*import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',*/
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
   /* }
  ]
})*/

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import category from './views/Categories.vue'
import random from './views/Random.vue'
import about from './views/About.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ './views/Search.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import(/* webpackChunkName: "details" */ './views/Details.vue')
    },
    {
      path:'/categories',
      name: 'categories',
     // component:() => import(/*webpackChuckName: "Categories" */ './views/Categories.vue') 
     component: category
    },
    {
      path: '/random',
      name: 'random',
     // component : () => import(/* webpackChunkName: "random"  */  './views/Random.vue')
     component : random
    },
    {
      path:'/about',
      name:'about',
      component:about
    }
  ]
})

export default router;
