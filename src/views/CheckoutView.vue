<template>
  <section class="w-[45%] pt-8 pb-32 m-auto">
    <h1 class="text-primary-green font-light text-6xl pt-7">Checkout</h1>

    <div class="step-indicator">
      <div v-for="(step, index) in steps" :key="index" class="step" @click="goToStep(index)">
        <div :class="{ active: index === currentStep }" class="step-circle">
          {{ index + 1 }}
        </div>

        <div class="step-text" :class="{ active: index === currentStep }">{{ step }}</div>
        <div class="step-line" v-if="index < steps.length - 1"></div>
      </div>
    </div>

    <!-- Forms Here -->
    <transition name="slide-fade" mode="out-in">
      <div :key="currentStep" class="mt-20">
        <component :is="currentStepComponent" @handleStep="(value: number) => goToStep(value)" />
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, type Ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ShippingAddress from '@/widgets/Checkout/ShippingAdrress.vue'
import PaymentDetails from '@/widgets/Checkout/PaymentDetails.vue'
import ReviewOrder from '@/widgets/Checkout/ReviewOrder.vue'

const route = useRoute()
const router = useRouter()

const steps: string[] = ['Shipping Address', 'Payment Details', 'Review Your Order']

const currentStep: Ref<number> = ref(0)

const currentStepComponent = computed(() => {
  switch (currentStep.value) {
    case 0:
      return ShippingAddress
    case 1:
      return PaymentDetails
    case 2:
      return ReviewOrder
    default:
      return ''
  }
})

onMounted(() => {
  updateStep()
})

const goToStep = (stepIndex: number) => {
  currentStep.value = stepIndex
  router.push({ query: { step: stepIndex } })
}

const updateStep = () => {
  const stepParam = route.query.step
  if (stepParam) {
    currentStep.value = parseInt(stepParam as string)
  }
}
</script>

<style lang="scss" scoped>
.step-indicator {
  @apply flex items-center mt-20;

  .step {
    @apply flex items-center mx-[0.375rem] cursor-pointer;

    .step-circle {
      @apply w-6 h-6 text-xs rounded-full bg-[#bdbdbd] text-white flex items-center justify-center;

      &.active {
        @apply bg-primary-green;
      }
    }

    .step-text {
      @apply text-[#0000008a] text-sm mx-[0.625rem];

      &.active {
        @apply text-[#000000de] font-medium;
      }
    }

    .step-line {
      @apply h-[1px] w-20 bg-[#b6cac1];
    }
  }
}
</style>
