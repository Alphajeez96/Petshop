import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const token: Ref<string> = ref('')

  return { token }
})
