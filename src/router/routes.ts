import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import ProductView from '../views/ProductView.vue'

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
  }

  //TODO: names =>  shop, products, settings
]

export default routes
