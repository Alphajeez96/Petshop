import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import ProductView from '../views/ProductView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/shop/:uuid',
    name: 'category',
    component: CategoryView
  },

  {
    path: '/products/:uuid',
    name: 'products',
    component: ProductView
  },

  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPasswordView
  },

  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPasswordView
  },

  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },

  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  }
]

export default routes
