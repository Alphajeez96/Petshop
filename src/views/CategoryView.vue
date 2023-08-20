<template>
  <section class="flex gap-20 px-20 mt-28">
    <aside class="self-center w-1/5">
      <PriceRange />
    </aside>

    <div class="h-screen">
      <h2 class="text-6xl">DRY DOG FOOD</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import PriceRange from '@/widgets/Product/PriceRange.vue'
</script>
