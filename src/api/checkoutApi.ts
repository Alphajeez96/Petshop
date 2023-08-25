import $axios from '@/axiosConfig'
import { type Payment, type Order } from '@/types/checkout'

export default () => ({
  async getOrderStatuses() {
    return await $axios.get('/order-statuses')
  },

  async createPayment(payload: Payment) {
    return await $axios.post('/payment/create', payload)
  },

  async createOrder(payload: Order) {
    return await $axios.post('/order/create', payload)
  }
})
