<template>
  <FilterToggle :isOpen="isOpen" title="category" @click="isOpen = !isOpen">
    <SkeletonLoader customClasses="h-12 mt-4" v-if="loading" />

    <div
      v-else
      class="mt-4 flex items-center w-full"
      v-for="category in categories"
      :key="category?.uuid"
    >
      <a class="cursor-pointer text-[#0000008a]">{{ capitalizeText(category?.title) }}</a>
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
const categories: Ref<Categories[]> = ref([])

onMounted(() => {
  fetchAllCategories()
})

const fetchAllCategories = async () => {
  try {
    loading.value = true
    const { getAllCategories } = productsApi()
    const response = await getAllCategories()
    const { data } = response || []

    categories.value = data
  } catch {
    // No need for specific error handling in this case
  } finally {
    loading.value = false
  }
}
</script>
