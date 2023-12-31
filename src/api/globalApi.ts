import $axios from '@/axiosConfig'

export default () => ({
  async getPromotions() {
    return await $axios.get('/main/promotions')
  },

  async getBlogPosts() {
    return await $axios.get('/main/blog')
  }
})
