import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index/template.vue'
import Create from '../views/Create/template.vue'
import Detail from '../views/Detail/template.vue'
import Edit from '../views/Edit/template.vue'
import Login from '../views/Login/template.vue'
import My from '../views/My/template.vue'
import Register from '../views/Register/template.vue'
import User from '../views/User/template.vue'

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/create',
    component: Create
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/edit',
    component: Edit
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/user',
    component: User
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
