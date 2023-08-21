<template>
  <section class="flex gap-20 px-20 mt-28">
    <!-- Side Bar here -->
    <aside class="self-center w-1/5 pb-32">
      <PriceRange />
      <BrandFilter class="mt-14" />
      <CategoryFilter class="mt-14" />
    </aside>

    <div class="h-screen">
      <h2 class="text-6xl text-primary-green font-light">DRY DOG FOOD</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import PriceRange from '@/widgets/Product/PriceRange.vue'
import BrandFilter from '@/widgets/Product/BrandFilter.vue'
import CategoryFilter from '@/widgets/Product/CategoryFilter.vue'
</script>
