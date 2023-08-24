<template>
  <section>
    <h5 class="text-xl text-[#000000de] font-medium mt-16">Card details</h5>

    <div class="mt-10">
      <!-- Name Here -->
      <div class="form-group flex gap-8">
        <TextInput
          id="delivery-first-name"
          placeholder="First name *"
          type="text"
          variant="tertiary"
        />
        <TextInput
          id="delivery-last-name"
          placeholder="Last name *"
          type="text"
          variant="tertiary"
        />
      </div>

      <!-- Addrss Line 1 -->
      <div class="form-group flex gap-8">
        <TextInput
          id="delivery-address-1"
          placeholder="Address line 1 *"
          type="text"
          variant="tertiary"
        />
      </div>

      <!-- Addrss Line 2 -->
      <div class="form-group flex gap-8">
        <TextInput
          id="delivery-address-2"
          placeholder="Address line 1 *"
          type="text"
          variant="tertiary"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TextInput from '@/components/TextInput/index.vue'
</script>
