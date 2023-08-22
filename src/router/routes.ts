import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import ProductView from '../views/ProductView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/shop/:uuid', // Use a parameter to capture the category UUID
    name: 'category',
    component: CategoryView
  },

  {
    path: '/products/:uuid', // Use a parameter to capture the category UUID
    name: 'products',
    component: ProductView
  },

  {
    path: '/forgot-password', // Use a parameter to capture the category UUID
    name: 'forgot-password',
    component: ForgotPasswordView
  },

  {
    path: '/reset-password', // Use a parameter to capture the category UUID
    name: 'reset-password',
    component: ResetPasswordView
  }

  //TODO: names =>  shop, products,forgot-password, rese
]

export default routes
