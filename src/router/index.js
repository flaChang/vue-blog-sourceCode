import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index/template.vue'
import Create from '../views/Create/template.vue'
import Detail from '../views/Detail/template.vue'
import Edit from '../views/Edit/template.vue'
import Login from '../views/Login/template.vue'
import My from '../views/My/template.vue'
import Register from '../views/Register/template.vue'
import User from '../views/User/template.vue'
import store from '../store/modules/auth/index'

const routes = [
  {
    path: '/',
    component: Index,
    meta: { requiresAuth: false }
  },
  {
    path: '/create',
    component: Create,
    meta: { requiresAuth: true }
  },
  {
    path: '/detail/:blogId',
    component: Detail,
    meta: { requiresAuth: false }
  },
  {
    path: '/edit/:blogId',
    component: Edit,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/my',
    component: My,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    component: Register,
    meta: { requiresAuth: false }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: { requiresAuth: false }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        return {
          path: '/login',
          query: {redirect: to.fullPath}
        }
      }
    })
  }
})
export default router
