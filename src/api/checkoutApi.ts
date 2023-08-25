import $axios from '@/axiosConfig'

export default () => ({
  async getOrderStatuses() {
    return await $axios.get('/order-statuses')
  },

  async createPayment() {
    return await $axios.post('/payment/create')
  },

  async createOrder() {
    return await $axios.post('/order/create')
  }
})
