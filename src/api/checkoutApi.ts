import $axios from '@/axiosConfig'

export default () => ({
  async getOrderStatuses() {
    return await $axios.get('/order-statuses')
  }
})
