<template>
  <section class="mt-10 flex flex-wrap gap-9">
    <div v-for="product in products" :key="product?.uuid">
      <ProductCard :loading="loading" :product="product" :hasButton="true" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard/index.vue'
import { type Product } from '@/types/products'

defineProps<{
  loading: boolean
  products: Product[]
}>()
</script>
