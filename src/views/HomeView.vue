<template>
  <section class="app-container">
    <HeroSlider />
    <CategoryDisplay :isLoading="isLoading" :category="categories[0] || {}" />

    <!-- Treat your pup section -->
    <div class="flex mt-28">
      <SkeletonLoader v-if="loading" customClasses="h-[400px]" />

      <template v-else>
        <div
          class="w-[55%] h-[400px]"
          :style="{ backgroundImage: `url(${retrieveFile(blogs[0]?.metadata?.image)})` }"
        ></div>

        <div class="self-center ml-auto w-2/5">
          <h2 class="text-primary-green text-6xl font-light" :title="blogs[0]?.title">
            {{ trimText(blogs[0]?.title, 20) }}
          </h2>

          <div class="mt-6">
            <Button id="pup-button" classes="h-10 px-4">
              <span class="text-xl font-medium underline" :title="blogs[0]?.title">{{
                trimText(blogs[0]?.title, 40)
              }}</span>
            </Button>
          </div>
        </div>
      </template>
    </div>

    <CategoryDisplay :isLoading="isLoading" :category="categories[1] || {}" />

    <!--Best Bits section -->
    <div class="flex mt-28 mb-36">
      <SkeletonLoader v-if="loading" customClasses="h-[400px]" />

      <template v-else>
        <div class="self-center w-1/2">
          <h2 class="text-primary-green text-6xl font-light" :title="blogs[1]?.title">
            {{ trimText(blogs[1]?.title, 20) }}
          </h2>

          <div class="mt-6">
            <Button id="pup-button" classes="h-10 px-4">
              <span class="text-xl font-medium underline" :title="blogs[1]?.title">{{
                trimText(blogs[1]?.title, 40)
              }}</span>
            </Button>
          </div>
        </div>

        <div
          class="ml-auto h-[400px] w-[55%]"
          :style="{ backgroundImage: `url(${retrieveFile(blogs[1]?.metadata?.image)})` }"
        ></div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import { type Blob } from '@/types/global'
import { type Categories } from '@/types/products'
import { retrieveFile, retrieveBlobData, getRandomArraySubset, trimText } from '@/utils/global'
import globalApi from '@/api/globalApi'
import HeroSlider from '@/widgets/Home/HeroSlider.vue'
import CategoryDisplay from '@/widgets/Home/CategoryDisplay.vue'
import Button from '@/components/Button/index.vue'
import SkeletonLoader from '@/widgets/Global/SkeletonLoader.vue'
import productsApi from '@/api/productsApi'

const loading: Ref<boolean> = ref(false)
const isLoading: Ref<boolean> = ref(false)
const blogs: Ref<Blob[]> = ref([])
const categories: Ref<Categories[]> = ref([])

onMounted(() => {
  fetchData()
})

const fetchData = async () => {
  await Promise.all([fetchBlogPosts(), fetchAllCategories()])
}

const fetchBlogPosts = async () => {
  try {
    loading.value = true
    const { getBlogPosts } = globalApi()
    const response = await getBlogPosts()
    const { data } = response || []

    blogs.value = getRandomArraySubset(retrieveBlobData(data), 2)
  } catch {
    // No need for specific error handling in this case
  } finally {
    loading.value = false
  }
}

const fetchAllCategories = async () => {
  try {
    isLoading.value = true
    const { getAllCategories } = productsApi()
    const response = await getAllCategories()
    const { data } = response || []

    categories.value = getRandomArraySubset(data, 2)
  } catch {
    // No need for specific error handling in this case
  } finally {
    isLoading.value = false
  }
}
</script>
