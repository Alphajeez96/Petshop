import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'
import { type Product } from '@/types/products'

export const useCartStore = defineStore(
  'cartStore',
  () => {
    const deliveryCharge: number = 25
    const cart: Ref<Product[]> = ref([])

    /* COMPUTED PROPERTIES HERE */
    const cartSize = computed<number>(() => cart.value.length || 0)
    const subTotalCartValue = computed<number>(() => {
      return cart.value.reduce((total, product) => {
        return total + +product.price * product.quantity!
      }, 0)
    })
    const totalCartValue = computed<number>(() => subTotalCartValue.value + deliveryCharge)

    /* ACTIONS HERE */
    const findProductInCart = (uuid: string) => cart.value.find((item) => item.uuid === uuid)

    const addToCart = (product: Product, quantity: number = 1) => {
      const existingProduct = findProductInCart(product.uuid)

      if (existingProduct) {
        existingProduct.quantity! += 1
      } else {
        cart.value.push({ ...product, quantity })
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
        existingProduct.quantity = quantity

        // To Ensure the quantity doesn't go below 1
        if (existingProduct.quantity! < 1) {
          existingProduct.quantity = 1
        }
      }
    }

    const clearCart = () => {
      cart.value = []
    }

    return {
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      findProductInCart,
      cartSize,
      clearCart,
      deliveryCharge,
      subTotalCartValue,
      totalCartValue
    }
  },

  {
    persist: {
      key: 'pet-store__cart'
    }
  }
)
