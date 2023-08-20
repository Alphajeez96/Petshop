<template>
  <div class="mt-28">
    <h2 class="category-title" @click="$router.push(`/category/${category?.uuid}`)">
      {{ category?.title }}
    </h2>

    <Carousel
      id="category-display"
      :items-to-show="3"
      :autoplay="0"
      :show-navigation="true"
      :transition="600"
    >
      <Slide v-for="product in products.slice(0, 5)" :key="product.uuid">
        <ProductCard :loading="loading || isLoading" :product="product" />
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import { Slide } from 'vue3-carousel'
import { type Categories, type Product } from '@/types/products'
import productsApi from '@/api/productsApi'
import Carousel from '@/components/Carousel/index.vue'
import ProductCard from '@/components/ProductCard/index.vue'

const props = defineProps<{
  isLoading: boolean
  category: Categories
}>()

const loading: Ref<boolean> = ref(false)
const products: Ref<Product[]> = ref([])

watch(
  () => props.category,
  (newCategory) => {
    if (newCategory.uuid) {
      fetchCategoryProducts(newCategory.uuid)
    }
  }
)

const fetchCategoryProducts = async (id: string) => {
  try {
    loading.value = true
    const { getCategoryProducts } = productsApi()
    const response = await getCategoryProducts(id)
    const { data } = response || []

    products.value = data
  } catch {
    // No need for specific error handling in this case
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.category-title {
  @apply text-primary-green text-6xl font-light pb-12 cursor-pointer;
}
</style>
