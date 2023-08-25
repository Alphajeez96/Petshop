<template>
  <section class="pb-10">
    <h5 class="text-xl text-[#000000de] font-medium mt-16">Type of payment</h5>

    <!-- Payment Method Selector here -->
    <div class="mt-8 flex justify-between">
      <div
        v-for="method in methods"
        :key="method.tag"
        class="method-holder box-shadow"
        :class="{ active: activeMethod === method.tag }"
        @click="setActiveMethod(method.tag)"
      >
        <IconPaymentMode :tag="method.tag" :isActive="activeMethod === method.tag" />
        <p class="text-xl text-[#000000de] font-medium pt-2">{{ method.title }}</p>
      </div>
    </div>

    <!-- Forms Here -->
    <transition name="slide-fade" mode="out-in">
      <div :key="activeMethod" class="mt-20">
        <CardDetails v-if="activeMethod === 'credit_card'" />
        <CashDelivery v-if="activeMethod === 'cash_on_delivery'" />
        <BankTransfer v-if="activeMethod === 'bank_transfer'" />
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { type PaymentTag } from '@/types/checkout'
import { useCheckoutStore } from '@/stores/checkout'
import CardDetails from './CardDetailsForm.vue'
import CashDelivery from './CashDeliveryForm.vue'
import BankTransfer from './BankTransferForm.vue'
import IconPaymentMode from '@/components/Icons/IconPaymentMode.vue'

interface Method {
  title: string
  tag: PaymentTag
}

const methods: Method[] = [
  { title: 'Credit Card', tag: 'credit_card' },
  { title: 'Cash on delivery', tag: 'cash_on_delivery' },
  { title: 'Bank transfer', tag: 'bank_transfer' }
]

const { setActiveMethod } = useCheckoutStore()
const activeMethod = toRef(useCheckoutStore(), 'activeMethod')
</script>

<style lang="scss" scoped>
.method-holder {
  @apply h-[190px] w-[190px] bg-white rounded-md flex items-center justify-center flex-col cursor-pointer ease-in-out duration-300;

  &:hover,
  &.active {
    @apply bg-[#F4F6F5];

    &:hover {
      @apply bg-[#EBEDEC];
    }
  }
}
</style>
