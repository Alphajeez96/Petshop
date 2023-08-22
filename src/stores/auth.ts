import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { type User } from '@/types/auth'
import { getInitials } from '@/utils/global'

export const useAuthStore = defineStore(
  'authStore',
  () => {
    const token: Ref<string> = ref('')
    const user: Ref<User | undefined> = ref(undefined)

    const isAuthenticated = computed<boolean>(() => !!token.value)
    const initials = computed<string>(() =>
      getInitials(user.value?.first_name ?? '', user.value?.last_name ?? '')
    )

    const setToken = (value: string) => {
      token.value = value
    }

    const setUser = (payload: User) => {
      user.value = payload
    }

    const logout = () => {
      token.value = ''
      user.value = undefined
    }

    return {
      token,
      user,
      setToken,
      setUser,
      logout,
      isAuthenticated,
      initials
    }
  },

  {
    persist: {
      key: 'pet-store__auth'
    }
  }
)
