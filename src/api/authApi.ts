import $axios from '@/axiosConfig'
import { type SignUp, type Login, type ResetPassword } from '@/types/auth'

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

  async recoverPassword(email: string) {
    return await $axios.post('/user/forgot-password', { email })
  },

  async resetPassword(payload: ResetPassword) {
    return await $axios.post('/user/reset-password-token', payload)
  },

  async logUserOut() {
    return await $axios.get('/user/logout')
  }
})
