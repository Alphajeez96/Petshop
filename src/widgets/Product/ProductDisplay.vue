<template>
  <section class="mt-10 flex justify-between">
    <p v-for="i in 3" :key="i">TEST</p>
  </section>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard/index.vue'
import { type Product } from '@/types/products'

defineProps<{
  loading?: boolean
  products?: Product[]
}>()
</script>
