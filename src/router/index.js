import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Access from '@/views/Access.vue'

// Access Children Routes
import Register from '@/components/Register'
import Login from '@/components/Login'

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
    path: '/',
    name: 'Access',
    component: Access,
    children: [
      {
        path: 'register',
        component: Register,
        name: 'Register'
      },
      {
        path: 'login',
        component: Login,
        name: 'Login'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
