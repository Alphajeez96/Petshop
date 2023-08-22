import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { type User } from '@/types/auth'

export const useAuthStore = defineStore(
  'authStore',
  () => {
    const token: Ref<string> = ref('')
    const user: Ref<User | {}> = ref({})

    const isAuthenticated = computed(() => !!token.value)

    const setToken = (value: string) => {
      token.value = value
    }

    const setUser = (userData: User) => {
      user.value = userData
    }

    const logout = () => {
      token.value = ''
      user.value = {}
    }

    return {
      token,
      user,
      setToken,
      setUser,
      logout,
      isAuthenticated
    }
  },
  {
    persist: {
      key: 'pet-store__auth'
    }
  }
)
