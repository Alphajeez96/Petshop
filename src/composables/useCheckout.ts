import { ref, computed, unref, type Ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useCheckoutStore } from '@/stores/checkout'
import checkoutApi from '@/api/checkoutApi'
import { useToast } from 'vue-toastification'

export const useCheckout = () => {
  const toast = useToast()

  const loading: Ref<boolean> = ref(false)
  const payment_uuid: Ref<string> = ref('')

  const checkout = useCheckoutStore()
  const { getOrderStatuses, createPayment } = checkoutApi()
  const { cart, totalCartValue, deliveryCharge, subTotalCartValue } = useCartStore()

  const placeOrder = async () => {
    try {
      loading.value = true
      console.log('LOAD CHECK:::', loading.value)

      const isShippingValid = await checkout.shippingAddressValidations.$validate()
      const isBillingValid = await checkout.billingAddressValidations.$validate()

      if (!isBillingValid || !isShippingValid) {
        return toast.error('Please ensure all required fields have been supplied!')
      }

      // console.log('CHECK', isBillingValid, 'check3::', isShippingValid)

      console.log('isLoading::', loading.value)

      // const response = await
    } catch {
      // catered for by error handler
    } finally {
      loading.value = false
    }
  }

  const createNewPayment = async () => {
    try {
      const response = await createPayment()

      console.log('TEST:::', response)
    } catch {
      //
    } finally {
      //
    }
  }

  const getOrderStatus = () => {
    getOrderStatuses().then((response) => {
      if (response.data.length) {
        const activeOrder = response.data.find((item: { title: string }) => item.title === 'open')

        if (activeOrder) {
          payment_uuid.value = activeOrder.uuid
        }
      }
    })
  }

  return {
    cart,
    shippingAddress: checkout.shippingAddress,
    billingAddress: checkout.shippingAddress,
    totalCartValue,
    deliveryCharge,
    subTotalCartValue,
    loading,
    placeOrder,
    createNewPayment,
    getOrderStatus
  }
}
