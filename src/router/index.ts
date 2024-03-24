import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const HomePage = () => import('@hn/pages/HomePage.vue')
const UserList = () => import('@hn/pages/user/UserList.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/users',
    component: UserList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
