import { createRouter, createWebHistory } from 'vue-router'
//createRouter创建路由实例，createWebHistory创建history模式路由

import login from '@/views/login/index.vue'
import layout from '@/views/layout/index.vue'
import home from '@/views/Home/index.vue'
import category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //配置path和commonent对应关系位置
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children: [
        {
          path: '',  //默认路由配置为空
          component:home
        },
        {
          path: 'category',
          component:category
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:login
      
      // () => import('../views/layout/index.vue')
    }
  ]
})

export default router
