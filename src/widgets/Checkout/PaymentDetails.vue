<template>
  <section>
    <h5 class="text-xl text-[#000000de] font-medium">Payment details</h5>

    <form class="mt-10">
      <!-- Name Here -->
      <div class="form-group flex gap-8">
        <TextInput
          id="first-name"
          placeholder="First name *"
          type="text"
          variant="tertiary"
          :disabled="isShippingSame"
          v-model="billingAddress.firstName"
          :error="billingValidations.firstName?.$error"
        />
        <TextInput
          id="last-name"
          placeholder="Last name *"
          type="text"
          variant="tertiary"
          :disabled="isShippingSame"
          v-model="billingAddress.lastName"
          :error="billingValidations.lastName?.$error"
        />
      </div>

      <!-- Addrss Line 1 -->
      <div class="form-group flex gap-8">
        <TextInput
          id="address-1"
          placeholder="Address line 1 *"
          type="text"
          variant="tertiary"
          :disabled="isShippingSame"
          v-model="billingAddress.addressLine1"
          :error="billingValidations.addressLine1?.$error"
        />
      </div>

      <!-- Addrss Line 2 -->
      <div class="form-group flex gap-8">
        <TextInput
          id="address-2"
          placeholder="Address line 2 *"
          type="text"
          variant="tertiary"
          :disabled="isShippingSame"
          v-model="billingAddress.addressLine2"
          :error="billingValidations.addressLine2?.$error"
        />
      </div>

      <!-- City - state  -->
      <div class="form-group flex gap-8">
        <TextInput
          id="billing-city"
          placeholder="City *"
          type="text"
          variant="tertiary"
          :disabled="isShippingSame"
          v-model="billingAddress.city"
          :error="billingValidations.city?.$error"
        />
        <TextInput
          id="billing-state"
          placeholder="State/Province/Region *"
          type="text"
          variant="tertiary"
          :disabled="isShippingSame"
          v-model="billingAddress.state"
          :error="billingValidations.state?.$error"
        />
      </div>

      <!-- Zip code - Country  -->
      <div class="form-group flex gap-8">
        <TextInput
          id="billing-zip"
          placeholder="Zip/Postal code *"
          type="text"
          variant="tertiary"
          :disabled="isShippingSame"
          v-model="billingAddress.zip"
          :error="billingValidations.zip?.$error"
        />
        <TextInput
          id="billing-country"
          placeholder="Country *"
          type="text"
          variant="tertiary"
          :disabled="isShippingSame"
          v-model="billingAddress.country"
          :error="billingValidations.country?.$error"
        />
      </div>

      <!-- Check box here -->
      <div class="form-group px-3">
        <el-checkbox
          label="Payment details are same as shipping details"
          size="large"
          :disabled="isShippingSame"
          v-model="isPaymentSame"
        />
      </div>

      <!-- Payment Method Here -->
      <PaymentMethod />

      <!-- Button Here -->
      <div class="flex justify-end mt-6">
        <Button
          id="prev-btn"
          :classes="buttonClass"
          variant="tertiary"
          @click="$emit('handleStep', 0)"
        >
          <span :class="`${spanClass} text-primary-green`">previous</span>
        </Button>

        <Button id="next-btn" :classes="`${buttonClass} ml-6`" @click="$emit('handleStep', 2)">
          <span :class="`${spanClass} text-white `">next</span>
        </Button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { toRef, onMounted } from 'vue'
import { useCheckoutStore } from '@/stores/checkout'
import TextInput from '@/components/TextInput/index.vue'
import PaymentMethod from './PaymentMethod.vue'

defineEmits<{
  handleStep: [value: number]
}>()

const buttonClass: string = 'h-9 rounded w-[6.875rem] box-shadow'
const spanClass: string = 'font-medium text-sm w-full uppercase'

const { billingAddress, shippingAddress, updateAddress, billingValidations } = useCheckoutStore()

const isShippingSame = toRef(useCheckoutStore(), 'isShippingSame')
const isPaymentSame = toRef(useCheckoutStore(), 'isPaymentSame')

onMounted(() => {
  if (isShippingSame.value) updateAddress(billingAddress, shippingAddress)
})
</script>
