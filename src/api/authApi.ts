import $axios from '@/axiosConfig'
import { type SignUp, type Login } from '@/types/auth'

export default () => ({
  async createUser(payload: SignUp) {
    return await $axios.post('/user/create', payload)
  },

  async loginUser(payload: Login) {
    return await $axios.post('/user/login', payload)
  }
})
