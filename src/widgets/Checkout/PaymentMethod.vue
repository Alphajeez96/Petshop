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
        @click="activeMethod = method.tag"
      >
        <IconPaymentMode :tag="method.tag" :isActive="activeMethod === method.tag" />
        <p class="text-xl text-[#000000de] font-medium pt-2">{{ method.title }}</p>
      </div>
    </div>

    <!-- Forms Here -->
    <transition name="slide-fade" mode="out-in">
      <div :key="activeMethod" class="mt-20">
        <CardDetails v-if="activeMethod === 'card'" />
        <CashDelivery v-if="activeMethod === 'cash'" />
        <BankTransfer v-if="activeMethod === 'bank'" />
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import IconPaymentMode from '@/components/Icons/IconPaymentMode.vue'
import CardDetails from './CardDetailsForm.vue'
import CashDelivery from './CashDeliveryForm.vue'
import BankTransfer from './BankTransferForm.vue'

interface Method {
  title: string
  tag: string
}

const methods: Method[] = [
  { title: 'Credit Card', tag: 'card' },
  { title: 'Cash on delivery', tag: 'cash' },
  { title: 'Bank transfer', tag: 'bank' }
]

const activeMethod: Ref<string> = ref('cash')
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
