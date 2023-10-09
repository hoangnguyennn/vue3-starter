import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import DefaultLayout from '@hn/layouts/DefaultLayout.vue'
import BlankLayout from '@hn/layouts/BlankLayout.vue'

const HomePage = () => import('@hn/pages/HomePage.vue')
const AboutPage = () => import('@hn/pages/AboutPage.vue')
const ContactPage = () => import('@hn/pages/ContactPage.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
    meta: {
      layout: DefaultLayout
    }
  },
  {
    path: '/about',
    component: AboutPage,
    meta: {
      layout: BlankLayout
    }
  },
  {
    path: '/contact',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
