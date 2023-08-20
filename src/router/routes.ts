import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/category/:uuid', // Use a parameter to capture the category UUID
    name: 'category',
    component: CategoryView
  }

  //TODO: names =>  category, products
]

export default routes
