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

  //   const {} = useCheckoutStore
  const { cart, totalCartValue, deliveryCharge, subTotalCartValue } = useCartStore()

  const placeOrder = async () => {
    try {
      console.log('LOAD CHECK:::', loading.value)

      const isShippingValid = await checkout.shippingValidations.$validate()
      const isBillingValid = await checkout.billingValidations.$validate()

      if (!isBillingValid || !isShippingValid) {
        toast.error('Please ensure all required fields have been supplied!')
        return
      }

      loading.value = true

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
    loading,
    placeOrder,
    totalCartValue,
    deliveryCharge,
    getOrderStatus,
    createNewPayment,
    subTotalCartValue,
    shippingAddress: checkout.shippingAddress,
    billingAddress: checkout.billingAddress,
    activeMethod: checkout.activeMethod
  }
}
