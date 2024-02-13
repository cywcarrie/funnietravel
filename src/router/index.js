import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/front/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/front/AboutView.vue')
  },
  {
    path: '/login',
    component: () => import('../views/front/LoginView.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/back/DashBoardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/back/ProductView.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/back/OrdersView.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/back/CouponsView.vue')
      }
    ]
  },
  {
    name: 'products',
    path: '/products/:category',
    component: () => import('../views/front/UserProducts.vue')
  },
  {
    name: 'product',
    path: '/product/:productId',
    component: () => import('../views/front/UserProduct.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/front/UserCart.vue')
  },
  {
    path: '/checkout',
    component: () => import('../views/front/UserCheckOut.vue')
  },
  {
    path: '/checkorder/:orderId',
    component: () => import('../views/front/UserCheckOrder.vue')
  },
  {
    path: '/favorite',
    component: () => import('../views/front/UserFavoriteView.vue')
  },
  {
    path: '/faqs',
    component: () => import('../views/front/FAQsView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'home'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
