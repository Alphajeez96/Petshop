<template>
  <FilterToggle :isOpen="isOpen" title="brand" @click="isOpen = !isOpen">
    <SkeletonLoader customClasses="h-12 mt-4" v-if="loading" />

    <div v-else class="mt-4 flex items-center w-full" v-for="brand in brands" :key="brand?.uuid">
      <a class="cursor-pointer text-[#0000008a]">{{ capitalizeText(brand?.title) }}</a>
    </div>
  </FilterToggle>
</template>

<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import { type Categories } from '@/types/products'
import { capitalizeText } from '@/utils/global'
import FilterToggle from './FilterToggle.vue'
import SkeletonLoader from '../Global/SkeletonLoader.vue'
import productsApi from '@/api/productsApi'

const loading: Ref<boolean> = ref(false)
const isOpen: Ref<boolean> = ref(true)
const brands: Ref<Categories[]> = ref([])

onMounted(() => {
  fetchAllBrands()
})

const fetchAllBrands = async () => {
  try {
    loading.value = true
    const { getAllBrands } = productsApi()
    const response = await getAllBrands()
    const { data } = response || []

    brands.value = data
  } catch {
    // No need for specific error handling in this case
  } finally {
    loading.value = false
  }
}
</script>
