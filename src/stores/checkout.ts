import { defineStore } from 'pinia'
import { ref, reactive, watch, type Ref } from 'vue'
import {
  type Address,
  type CashDelivery,
  type CreditCard,
  type BankTransfer,
  type PaymentTag
} from '@/types/checkout'
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

    const creditCardObject: CreditCard = {
      cardNumber: '',
      cvv: '',
      expiry: '',
      text: 'Credit Card'
    }

    const cashDeliveryObject: CashDelivery = {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      consent: false,
      text: 'Cash on delivery'
    }

    const BankTransferObject: BankTransfer = {
      iBAN: '',
      name: '',
      refcode: '',
      swiftCode: '',
      text: 'Bank transfer'
    }

    const isShippingSame: Ref<boolean> = ref(false)
    const isPaymentSame: Ref<boolean> = ref(false)
    const activeMethod: Ref<PaymentTag> = ref('cash_on_delivery')
    const billingAddress: Address = reactive({ ...addressObject })
    const shippingAddress: Address = reactive({ ...addressObject })
    const creditCardDetails: CreditCard = reactive({ ...creditCardObject })
    const cashDeliveryDetails: CashDelivery = reactive({ ...cashDeliveryObject })
    const bankTransferDetails: BankTransfer = reactive({ ...BankTransferObject })

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

    const setActiveMethod = (value: PaymentTag) => {
      activeMethod.value = value
    }

    return {
      addressObject,
      isShippingSame,
      isPaymentSame,
      shippingAddress,
      billingAddress,
      updateAddress,
      setActiveMethod,
      activeMethod,
      creditCardDetails,
      cashDeliveryDetails,
      bankTransferDetails,
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
