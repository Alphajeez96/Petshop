<template>
  <section>
    <h5 class="text-xl text-[#000000de] font-medium mt-16">Bank Transfer</h5>

    <div class="mt-10">
      <!-- Swift Code -->
      <div class="form-group flex gap-8">
        <TextInput
          id="swift-code"
          placeholder="Bank SWIFT code *"
          type="text"
          variant="tertiary"
          v-model="bankTransferDetails.swiftCode"
        />
      </div>

      <!--IBAN - Name-->
      <div class="form-group flex gap-8">
        <TextInput
          id="iban"
          placeholder="IBAN *"
          type="text"
          variant="tertiary"
          v-model="bankTransferDetails.iBAN"
        />
        <TextInput
          id="account-name"
          placeholder="Name *"
          type="text"
          variant="tertiary"
          v-model="bankTransferDetails.name"
        />
      </div>

      <!-- Ref code -->
      <div class="form-group flex gap-8">
        <TextInput
          id="ref-code"
          placeholder="Ref code *"
          type="text"
          variant="tertiary"
          v-model="bankTransferDetails.refcode"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCheckoutStore } from '@/stores/checkout'
import TextInput from '@/components/TextInput/index.vue'

const { bankTransferDetails } = useCheckoutStore()
</script>
