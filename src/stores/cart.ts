import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { type Product } from '@/types/products'

export const useCartStore = defineStore(
  'cartStore',
  () => {
    const cart: Ref<Product[]> = ref([])

    const addToCart = (product: Product) => {
      const existingProduct = findProductInCart(product.uuid)

      if (existingProduct) {
        existingProduct.quantity! += 1
      } else {
        cart.value.push({ ...product, quantity: 1 })
      }
    }

    const removeFromCart = (product: Product) => {
      const index = cart.value.findIndex((item) => item.uuid === product.uuid)
      if (index > -1) {
        cart.value.splice(index, 1)
      }
    }

    const updateQuantity = (product: Product, quantity: number) => {
      const existingProduct = findProductInCart(product.uuid)

      if (existingProduct) {
        existingProduct.quantity! += quantity

        // To Ensure the quantity doesn't go below 1
        if (existingProduct.quantity! < 1) {
          existingProduct.quantity = 1
        }
      }
    }

    const findProductInCart = (uuid: string) => cart.value.find((item) => item.uuid === uuid)

    return {
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      findProductInCart
    }
  },

  {
    persist: {
      key: 'pet-store__cart'
    }
  }
)
