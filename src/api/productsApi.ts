import $axios from '@/axiosConfig'

export default () => ({
  async getAllCategories() {
    return await $axios.get('/categories')
  },

  async getCategoryProducts(category: string) {
    return await $axios.get(`/products?category=${category}`)
  }
})
