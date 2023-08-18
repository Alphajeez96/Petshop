<template>
  <div class="mt-28 mb-32">
    <h2 class="category-title">Dry dog food</h2>

    <!-- <div class="flex">
      <ProductCard v-for="i in 3" :key="i" />
    </div> -->

    <Carousel :items-to-show="3" :autoplay="4000" :show-navigation="true" :transition="600">
      <Slide v-for="i in 5" :key="i">
        <ProductCard />
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import Carousel from '@/components/Carousel/index.vue'
import { Slide } from 'vue3-carousel'
import ProductCard from '@/components/ProductCard/index.vue'
</script>

<style lang="scss" scoped>
.category-title {
  @apply text-primary-green text-6xl font-light pb-12 cursor-pointer;
}
</style>
