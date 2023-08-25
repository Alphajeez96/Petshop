import { defineStore } from 'pinia'
import { ref, reactive, watch, type Ref } from 'vue'
import { type Address, type Payment, type Checkout } from '@/types/checkout'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

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
    const paymentDetails: Payment['details'] = reactive({})
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

    const addressValidation = {
      firstName: { required },
      lastName: { required },
      addressLine1: { required },
      city: { required },
      state: { required },
      zip: { required },
      country: { required }
    }

    const shippingAddressValidations = useVuelidate(addressValidation, shippingAddress)
    const billingAddressValidations = useVuelidate(addressValidation, billingAddress)

    const updateAddress = (target: Address, payload: Address) => {
      Object.assign(target, payload)
    }

    return {
      addressObject,
      isShippingSame,
      isPaymentSame,
      shippingAddress,
      billingAddress,
      paymentDetails,
      updateAddress,
      shippingAddressValidations,
      billingAddressValidations
    }
  },

  {
    persist: {
      key: 'pet-store__checkout'
    }
  }
)
