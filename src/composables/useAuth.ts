import { ref, type Ref } from 'vue'
import { type User } from '@/types/auth'
import { useAuthStore } from '@/stores/auth'
import authApi from '@/api/authApi'

export const useAuthentication = () => {
  const isLoggingOut: Ref<boolean> = ref(false)

  const authStore = useAuthStore()
  const { setToken, setUser, logout } = authStore

  const setSessionToken = (token: string) => {
    setToken(token)
  }

  const setUserData = (payload: User) => {
    setUser(payload)
  }

  const handleLogout = () => {
    isLoggingOut.value = true
    const { logUserOut } = authApi()

    logUserOut()
      .then((_response) => {
        logout()
      })

      .finally(() => {
        isLoggingOut.value = false
      })
  }

  return {
    setSessionToken,
    setUserData,
    handleLogout,
    isLoggingOut
  }
}
