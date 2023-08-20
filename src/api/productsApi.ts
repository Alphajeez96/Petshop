import $axios from '@/axiosConfig'

export default () => ({
  async getAllCategories() {
    return await $axios.get('/categories')
  },

  async getProductList(searchParam: string) {
    return await $axios.get(`/products${searchParam}`)
  }
})
