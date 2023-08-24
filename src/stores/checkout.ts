import { defineStore } from 'pinia'
import { computed, ref, reactive, watch, type Ref } from 'vue'
import { type Address, type Checkout } from '@/types/checkout'

export const useCheckoutStore = defineStore(
  'checkoutStore',
  () => {
    const addressObject: Address = {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      country: ''
    }

    const isShippingSame: Ref<boolean> = ref(false)
    const isPaymentSame: Ref<boolean> = ref(false)
    const shippingAddress: Address = reactive({ ...addressObject })
    const billingAddress: Address = reactive({ ...addressObject })

    watch(isShippingSame, (value) => {
      if (!value) {
        updateAddress(billingAddress, addressObject)
      }
    })

    watch(isPaymentSame, (value) => {
      if (!value) {
        updateAddress(shippingAddress, addressObject)
      }
    })

    const updateAddress = (target: Address, payload: Address) => {
      Object.assign(target, payload)
    }

    return {
      addressObject,
      isShippingSame,
      isPaymentSame,
      shippingAddress,
      billingAddress,
      updateAddress
    }
  },

  {
    persist: {
      key: 'pet-store__checkout'
    }
  }
)
