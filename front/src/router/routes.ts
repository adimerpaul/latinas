import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainClienteLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexClientPage.vue') },
      { path: 'book/:id', component: () => import('pages/BookPage.vue') }
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
