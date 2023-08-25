<template>
  <section>
    <h5 class="text-xl text-[#000000de] font-medium">Shipping address</h5>

    <div class="mt-10">
      <!-- Name Here -->
      <div class="form-group flex gap-8">
        <TextInput
          id="first-name"
          placeholder="First name *"
          type="text"
          variant="tertiary"
          :disabled="isPaymentSame"
          v-model="shippingAddress.firstName"
          :error="shippingValidations.firstName?.$error"
        />
        <TextInput
          id="last-name"
          placeholder="Last name *"
          type="text"
          variant="tertiary"
          :disabled="isPaymentSame"
          v-model="shippingAddress.lastName"
          :error="shippingValidations.lastName?.$error"
        />
      </div>

      <!-- Addrss Line 1 -->
      <div class="form-group flex gap-8">
        <TextInput
          id="address-1"
          placeholder="Address line 1 *"
          type="text"
          variant="tertiary"
          :disabled="isPaymentSame"
          v-model="shippingAddress.addressLine1"
          :error="shippingValidations.addressLine1?.$error"
        />
      </div>

      <!-- Addrss Line 2 -->
      <div class="form-group flex gap-8">
        <TextInput
          id="address-2"
          placeholder="Address line 2 *"
          type="text"
          variant="tertiary"
          :disabled="isPaymentSame"
          v-model="shippingAddress.addressLine2"
          :error="shippingValidations.addressLine2?.$error"
        />
      </div>

      <!-- City - state  -->
      <div class="form-group flex gap-8">
        <TextInput
          id="shipping-city"
          placeholder="City *"
          type="text"
          variant="tertiary"
          :disabled="isPaymentSame"
          v-model="shippingAddress.city"
          :error="shippingValidations.city?.$error"
        />
        <TextInput
          id="shipping-state"
          placeholder="State/Province/Region *"
          type="text"
          variant="tertiary"
          :disabled="isPaymentSame"
          v-model="shippingAddress.state"
          :error="shippingValidations.state?.$error"
        />
      </div>

      <!-- Zip code - Country  -->
      <div class="form-group flex gap-8">
        <TextInput
          id="shipping-zip"
          placeholder="Zip/Postal code *"
          type="text"
          variant="tertiary"
          :disabled="isPaymentSame"
          v-model="shippingAddress.zip"
          :error="shippingValidations.zip?.$error"
        />
        <TextInput
          id="shipping-country"
          placeholder="Country *"
          type="text"
          variant="tertiary"
          :disabled="isPaymentSame"
          v-model="shippingAddress.country"
          :error="shippingValidations.country?.$error"
        />
      </div>

      <!-- Check box here -->
      <div class="form-group px-3">
        <el-checkbox
          label="Use this address for payment details"
          size="large"
          :disabled="isPaymentSame"
          v-model="isShippingSame"
        />
      </div>

      <!-- Button Here -->
      <div class="flex justify-end mt-6">
        <Button
          id="shipping-address-button"
          classes="h-9 rounded w-[6.875rem] box-shadow"
          @click="$emit('handleStep', 1)"
        >
          <span class="text-white font-medium text-sm w-full">NEXT</span>
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { toRef, onMounted } from 'vue'
import TextInput from '@/components/TextInput/index.vue'
import { useCheckoutStore } from '@/stores/checkout'

const { shippingAddress, billingAddress, updateAddress, shippingValidations } = useCheckoutStore()

const isShippingSame = toRef(useCheckoutStore(), 'isShippingSame')
const isPaymentSame = toRef(useCheckoutStore(), 'isPaymentSame')

onMounted(() => {
  if (isPaymentSame.value) updateAddress(shippingAddress, billingAddress)
})

defineEmits<{
  handleStep: [value: number]
}>()
</script>
