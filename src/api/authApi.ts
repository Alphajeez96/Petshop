import $axios from '@/axiosConfig'
import { type SignUp, type Login } from '@/types/auth'

export default () => ({
  async fetchUser() {
    return await $axios.get('/user')
  },

  async createUser(payload: SignUp) {
    return await $axios.post('/user/create', payload)
  },

  async loginUser(payload: Login) {
    return await $axios.post('/user/login', payload)
  },

  async logUserOut() {
    return await $axios.get('/user/logout')
  }
})
