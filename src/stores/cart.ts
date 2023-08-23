import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { type Product } from '@/types/products'

export const useCartStore = defineStore(
  'cartStore',
  () => {
    const cart: Ref<Product[]> = ref([])

    // Add to cart, remove from cart

    return {
      cart
    }
  },

  {
    persist: {
      key: 'pet-store__cart'
    }
  }
)
