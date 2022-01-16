import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/modules/auth/index'

const routes = [
  {
    path: '/',
    component:()=>import('@/views/Index/template.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/create',
    component: ()=>import("@/views/Create/template.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/detail/:blogId',
    component: ()=>import('@/views/Detail/template.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/edit/:blogId',
    component: ()=>import('@/views/Edit/template.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: ()=>import('@/views/Login/template.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/my',
    component: ()=>import('@/views/My/template.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    component: ()=>import('@/views/Register/template.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/user/:userId',
    component: ()=>import('@/views/User/template.vue'),
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
