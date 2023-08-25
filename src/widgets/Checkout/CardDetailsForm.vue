<template>
  <section>
    <h5 class="text-xl text-[#000000de] font-medium mt-16">Card details</h5>

    deets: {{ paymentDetails }}

    <div class="mt-10">
      <!-- Credit card number -->
      <div class="form-group flex gap-8">
        <TextInput
          id="card-number"
          placeholder="Credit Card number *"
          type="text"
          variant="tertiary"
        />
      </div>

      <!--CVV - exp.date -->
      <div class="form-group flex gap-8">
        <TextInput id="expiry-date" placeholder="Expiry" type="text" variant="tertiary" />
        <TextInput id="cvv" placeholder="CVV *" type="text" variant="tertiary" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCheckoutStore } from '@/stores/checkout'
import TextInput from '@/components/TextInput/index.vue'

const { paymentDetails } = useCheckoutStore()
</script>
