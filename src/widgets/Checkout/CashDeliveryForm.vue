<template>
  <section>
    <h5 class="text-xl text-[#000000de] font-medium mt-16">Cash on delivery</h5>

    <div class="mt-10">
      <!-- Name Here -->
      <div class="form-group flex gap-8">
        <TextInput
          id="delivery-first-name"
          placeholder="First name *"
          type="text"
          variant="tertiary"
          v-model="cashDeliveryDetails.firstName"
        />
        <TextInput
          id="delivery-last-name"
          placeholder="Last name *"
          type="text"
          variant="tertiary"
          v-model="cashDeliveryDetails.lastName"
        />
      </div>

      <!-- Addrss Line 1 -->
      <div class="form-group flex gap-8">
        <TextInput
          id="delivery-address-1"
          placeholder="Address line 1 *"
          type="text"
          variant="tertiary"
          v-model="cashDeliveryDetails.addressLine1"
        />
      </div>

      <!-- Addrss Line 2 -->
      <div class="form-group flex gap-8">
        <TextInput
          id="delivery-address-2"
          placeholder="Address line 1 *"
          type="text"
          variant="tertiary"
          v-model="cashDeliveryDetails.addressLine2"
        />
      </div>

      <!-- T&C Consent Here -->
      <div class="form-group px-3">
        <el-checkbox
          label="I consent to your T&C’s"
          size="large"
          v-model="cashDeliveryDetails.consent"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCheckoutStore } from '@/stores/checkout'
import TextInput from '@/components/TextInput/index.vue'

const { cashDeliveryDetails } = useCheckoutStore()
</script>
