import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const createAxiosInstance = (): AxiosInstance => {
  const baseURL = 'https://pet-shop.buckhill.com.hr/api/swagger' //Ideally have this in an environment variable
  const headers = {
    'Content-Type': 'application/json'
  }

  const instance: AxiosInstance = axios.create({ baseURL, headers })

  instance.interceptors.request.use(
    (config) => {
      const { token } = useAuthStore()

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    (error) => {
      if (
        Object.prototype.hasOwnProperty.call(error.config, 'handleError') &&
        !error.config.handleError
      ) {
        return Promise.reject(error)
      }

      // Handle request error
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response) => {
      return response.data
    },
    (error) => {
      if (error.response?.status === 401) {
        const router = useRouter()
        router.push('/')
      }

      // Handle response error, e.g., logging or showing a notification
      //   Error Handler here
      return Promise.reject(error)
    }
  )

  return instance
}

const $axios: AxiosInstance = createAxiosInstance()
export default $axios
