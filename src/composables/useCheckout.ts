import { ref, computed, type Ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useCheckoutStore } from '@/stores/checkout'
import {
  type Order,
  type OrderProduct,
  type CashDelivery,
  type CreditCard,
  type BankTransfer
} from '@/types/checkout'
import checkoutApi from '@/api/checkoutApi'
import { useToast } from 'vue-toastification'

export const useCheckout = () => {
  type PaymentDetails = {
    cash_on_delivery: CashDelivery
    credit_card: CreditCard
    bank_transfer: BankTransfer
  }

  const toast = useToast()

  const checkout = useCheckoutStore()
  const { createPayment, createOrder, getOrderStatuses } = checkoutApi()
  const { cart, totalCartValue, deliveryCharge, subTotalCartValue } = useCartStore()

  const loading: Ref<boolean> = ref(false)
  const order_status_uuid: Ref<string> = ref('')

  const paymentDetails: Ref<PaymentDetails> = computed(() => {
    return {
      cash_on_delivery: checkout.cashDeliveryDetails,
      credit_card: checkout.creditCardDetails,
      bank_transfer: checkout.bankTransferDetails
    }
  })

  const placeOrder = async () => {
    const isShippingValid = await checkout.shippingValidations.$validate()
    const isBillingValid = await checkout.billingValidations.$validate()

    if (!isBillingValid || !isShippingValid) {
      toast.error('Please ensure all required fields have been supplied!')
      return
    }

    loading.value = true
    await createNewPayment()
    loading.value = false
  }

  const createNewPayment = async () => {
    const response = await createPayment({
      details: paymentDetails.value[checkout.activeMethod],
      type: checkout.activeMethod
    })

    if (response.data) {
      await handleOrderCreation(response.data?.uuid)
    }
  }

  const handleOrderCreation = async (payment_uuid: string) => {
    const shippingAddressLine1: string = checkout.shippingAddress?.addressLine1
    const billingAddressLine1: string = checkout.billingAddress?.addressLine1

    const products: OrderProduct[] = cart.map(({ quantity, uuid }) => ({
      quantity,
      uuid
    }))

    const address: { shipping: string; billing: string } = {
      shipping: shippingAddressLine1,
      billing: billingAddressLine1
    }

    const payload: Order = {
      address: JSON.stringify(address),
      order_status_uuid: order_status_uuid.value,
      payment_uuid,
      products
    }

    await createOrder(payload)
  }

  const getOrderStatus = async () => {
    const response = await getOrderStatuses()

    if (response.data.length) {
      const order = response.data.find((item: { title: string }) => item.title === 'open')

      if (order) {
        order_status_uuid.value = order.uuid
      }
    }
  }

  return {
    cart,
    loading,
    placeOrder,
    totalCartValue,
    deliveryCharge,
    getOrderStatus,
    subTotalCartValue,
    shippingAddress: checkout.shippingAddress,
    billingAddress: checkout.billingAddress,
    activeMethod: checkout.activeMethod
  }
}
