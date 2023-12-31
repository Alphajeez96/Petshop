<template>
  <section>
    <h5 class="outer-header">Review your order</h5>
    <div class="mt-10">
      <!-- Shipping Address Details -->
      <section class="region-holder">
        <div class="segment-holder">
          <h5 class="caption">Shipping address</h5>
          <a class="action-button" @click="$emit('handleStep', 0)">Edit</a>
        </div>

        <div class="px-5 mt-5">
          <p class="inner-header">
            <span>First and Last name</span>
            <span class="content">
              {{ retrieveName(checkout.shippingAddress) }}
            </span>
          </p>

          <p class="inner-text">
            <span>Address Line 1</span>
            <span class="content">
              {{ checkout.shippingAddress?.addressLine1 }}
            </span>
          </p>

          <p class="inner-text">
            <span>Address Line 2</span>
            <span class="content">
              {{ checkout.shippingAddress?.addressLine2 }}
            </span>
          </p>

          <p class="inner-text">
            <span>City, State/Province/Region</span>
            <span class="content">
              {{ retrieveRegion(checkout.shippingAddress) }}
            </span>
          </p>

          <p class="inner-text">
            <span>ZIP/Postal Code, Country </span>
            <span class="content">
              {{ retrieveCountry(checkout.shippingAddress) }}
            </span>
          </p>
        </div>
      </section>

      <!-- Payment  Details -->
      <section class="region-holder">
        <div class="segment-holder">
          <h5 class="caption">Payment details</h5>
          <a class="action-button" @click="$emit('handleStep', 1)">Edit</a>
        </div>

        <div class="mt-5">
          <div class="px-5 mt-5">
            <p class="inner-header">
              <span>First and Last name</span>
              <span class="content">
                {{ retrieveName(checkout.billingAddress) }}
              </span>
            </p>

            <p class="inner-text">
              <span>Address Line 1</span>
              <span class="content">
                {{ checkout.billingAddress?.addressLine1 }}
              </span>
            </p>

            <p class="inner-text">
              <span>Address Line 2</span>
              <span class="content">
                {{ checkout.billingAddress?.addressLine2 }}
              </span>
            </p>

            <p class="inner-text">
              <span>City, State/Province/Region</span>
              <span class="content">
                {{ retrieveRegion(checkout.billingAddress) }}
              </span>
            </p>

            <p class="inner-text">
              <span>ZIP/Postal Code, Country </span>
              <span class="content">
                {{ retrieveCountry(checkout.billingAddress) }}
              </span>
            </p>
          </div>
        </div>

        <div class="divider"></div>

        <div class="px-5 mt-5">
          <p class="inner-header">Type of Payment</p>
          <p class="inner-text">{{ underscoreFormatter(checkout.activeMethod) }}</p>
        </div>
      </section>

      <!-- Order  Details -->
      <section class="region-holder">
        <div class="segment-holder">
          <h5 class="caption">Your order</h5>
          <a class="action-button" @click="$router.push('/cart')">Edit</a>
        </div>

        <!-- Products here -->
        <div
          class="product-holder border-b border-b-[#f7f7f7] p-5 flex gap-8"
          v-for="item in checkout.cart"
          :key="item.uuid"
        >
          <div class="image-holder h-24 w-24">
            <img
              :src="retrieveFile(item.metadata?.image)"
              :alt="item.title"
              class="h-[inherit] w-[inherit] object-contain"
            />
          </div>

          <div class="w-4/5">
            <h5 class="outer-header underline">{{ item.title }}</h5>
            <p class="text-primary-gray py-1" v-capitalize>{{ item.category?.title }} -</p>
            <p class="outer-header">{{ formatCurrency(+item.price) }}</p>
          </div>
        </div>
      </section>

      <!-- Order Summary -->
      <section class="region-holder">
        <div class="segment-holder">
          <h5 class="caption">Summary</h5>
        </div>

        <div class="px-5 mt-3">
          <div class="flex pb-1">
            <p class="inner-text">Subtotal before delivery</p>
            <p class="inner-text ml-auto">{{ formatCurrency(checkout.subTotalCartValue) }}</p>
          </div>

          <div class="flex">
            <p class="inner-text">Delivery Charge</p>
            <p class="inner-text ml-auto">{{ formatCurrency(checkout.deliveryCharge) }}</p>
          </div>
        </div>

        <div class="divider"></div>

        <div class="flex text-[#000000de] px-5 mt-3">
          <p class="">Total</p>
          <p class="ml-auto">{{ formatCurrency(checkout.totalCartValue) }}</p>
        </div>
      </section>

      <div>
        <Button
          id="order-button"
          classes="px-5 h-12 rounded box-shadow mt-10 w-full mx-5"
          :disabled="!checkout.cart.length"
          @click="handleOrder"
        >
          <span class="ml-2 uppercase text-[0.938rem] font-medium w-full">place order</span>
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { type Address } from '@/types/checkout'
import { useCheckout } from '@/composables/useCheckout'
import {
  formatCurrency,
  debounce,
  retrieveFile,
  underscoreFormatter,
  scrollToTop
} from '@/utils/global'

defineEmits<{
  handleStep: [value: number]
}>()

onMounted(() => {
  checkout.getOrderStatus()
  scrollToTop()
})

const checkout = useCheckout()
const retrieveName = (data: Address): string => `${data?.firstName} ${data?.lastName}`

const retrieveRegion = (data: Address): string => {
  return `${data.city ? data.city + ', ' : ''}${data.state ?? ''}`
}
const retrieveCountry = (data: Address): string => {
  return `${data.zip ? data.zip + ', ' : ''}${data.country ?? ''}`
}

const handleOrder = debounce(() => {
  checkout.placeOrder()
}, 100)
</script>

<style lang="scss" scoped>
.outer-header {
  @apply text-xl text-[#000000de] font-medium;
}
.region-holder {
  @apply pb-10;
  .segment-holder {
    @apply bg-[#FAFAFA]  flex items-center h-8 px-5;

    .caption {
      @apply text-xl font-medium text-[#000000de];
    }

    .action-button {
      @apply ml-auto text-sm text-primary-green cursor-pointer;
    }
  }

  .inner-header {
    @apply text-[#000000de] pb-1 flex;
  }

  .inner-text {
    @apply text-primary-gray text-sm pb-0.5 flex;
  }

  .content {
    @apply ml-auto text-right w-4/6;
  }
}

.divider {
  @apply border-b border-b-[#f7f7f7] py-3;
}
</style>
