import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainClienteLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexClientPage.vue') },
      { path: 'book/:id', component: () => import('pages/BookPage.vue') },
      { path: 'cart', component: () => import('pages/CartPage.vue') }
    ]
  },
  { path: '/login', component: () => import('pages/LoginPage.vue') },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), meta: { requiresAuth: true } },
      { path: '/carousel', component: () => import('pages/CarouselPage.vue'), meta: { requiresAuth: true } },
      { path: '/books', component: () => import('pages/BooksPage.vue'), meta: { requiresAuth: true } },
      { path: '/cogs', component: () => import('pages/CogsPage.vue'), meta: { requiresAuth: true } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
