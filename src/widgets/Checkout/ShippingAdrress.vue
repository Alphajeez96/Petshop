<template>
  <section>
    <h5 class="text-xl text-[#000000de] font-medium">Shipping address</h5>

    <div class="mt-10">
      <!-- Name Here -->
      <div class="form-group flex gap-8">
        <TextInput id="first-name" placeholder="First name *" type="text" variant="tertiary" />
        <TextInput id="last-name" placeholder="Last name *" type="text" variant="tertiary" />
      </div>

      <!-- Addrss Line 1 -->
      <div class="form-group flex gap-8">
        <TextInput id="address-1" placeholder="Address line 1 *" type="text" variant="tertiary" />
      </div>

      <!-- Addrss Line 2 -->
      <div class="form-group flex gap-8">
        <TextInput id="address-2" placeholder="Address line 1 *" type="text" variant="tertiary" />
      </div>

      <!-- City - state  -->
      <div class="form-group flex gap-8">
        <TextInput id="first-name" placeholder="City *" type="text" variant="tertiary" />
        <TextInput
          id="last-name"
          placeholder="State/Province/Region *"
          type="text"
          variant="tertiary"
        />
      </div>

      <!-- City - state  -->
      <div class="form-group flex gap-8">
        <TextInput id="first-name" placeholder="City *" type="text" variant="tertiary" />
        <TextInput
          id="last-name"
          placeholder="State/Province/Region *"
          type="text"
          variant="tertiary"
        />
      </div>

      <!-- Zip code - Country  -->
      <div class="form-group flex gap-8">
        <TextInput id="first-name" placeholder="Zip/Postal code *" type="text" variant="tertiary" />
        <TextInput id="last-name" placeholder="Country *" type="text" variant="tertiary" />
      </div>

      <!-- Check box here -->
      <div class="form-group px-3">
        <el-checkbox label="Use this address for payment details" size="large" />
      </div>

      <!-- Button Here -->
      <div class="flex justify-end mt-6">
        <Button
          id="shipping-address-button"
          class="h-"
          classes="h-9 rounded w-[6.875rem] box-shadow"
        >
          <span class="text-white font-medium text-sm w-full">NEXT</span>
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TextInput from '@/components/TextInput/index.vue'
</script>
