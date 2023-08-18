<template>
  <div class="app-container holder">
    <div class="h-[8.5rem]">
      <img src="@/assets/images/logo-green.svg" alt="green" />
    </div>

    <!-- Footer Links Here -->
    <div v-for="(link, i) in footerLinks" :key="i">
      <p class="text-xl font-medium pb-1.5">{{ link.title }}</p>
      <a class="route" v-for="route in link.routes" :key="route" href="#">{{ route }}</a>
    </div>

    <div class="w-[21%]">
      <p class="text-primary-gray leading-6">
        If you can’t find answer to your question, please contact our
        <a href="mailto:contact@petson.com" class="text-[#1976D2]">customer service.</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const footerLinks = [
  {
    title: 'Petson',
    routes: ['About us', 'Blog', 'store locator']
  },

  {
    title: 'Contact',
    routes: ['contact@petson.com', '+385 000 000', '35 Shnauzer avenue, Dogville AL']
  },

  {
    title: 'Information',
    routes: ['Ordering and shipping', 'FAQ', 'GDPR statement']
  }
]
</script>

<style lang="scss" scoped>
.holder {
  @apply h-[inherit] flex items-center justify-between;

  .route {
    @apply text-base block text-primary-gray pb-2.5;
  }
}
</style>
