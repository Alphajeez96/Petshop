import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'
import { type User } from '@/types/auth'
import { getInitials } from '@/utils/global'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore(
  'authStore',
  () => {
    const token: Ref<string> = ref('')
    const user: Ref<User | undefined> = ref(undefined)

    const isAuthenticated = computed<boolean>(() => !!token.value)
    const initials = computed<string>(() =>
      getInitials(user.value?.first_name ?? '', user.value?.last_name ?? '')
    )

    const router = useRouter()
    const { clearCart } = useCartStore()

    const setToken = (value: string) => {
      token.value = value
    }

    const setUser = (payload: User) => {
      user.value = payload
    }

    const logout = () => {
      token.value = ''
      user.value = undefined
      clearCart()
      router.push('/')
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
