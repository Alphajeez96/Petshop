<template>
  <div class="mt-11">
    <SkeletonLoader v-if="loading" customClasses="h-[400px]" />

    <Carousel
      v-else
      :items-to-show="1"
      :autoplay="3500"
      :show-navigation="false"
      :transition="600"
      :break-points="{}"
    >
      <Slide v-for="(slide, i) in slides" :key="i">
        <div
          class="carousel-item"
          :style="{ backgroundImage: `url(${retrieveFile(slide.metadata?.image)})` }"
        >
          <div class="text-left px-10 py-8">
            <h1 class="text-6xl font-light content">{{ slide.title }}</h1>
            <p class="mt-2 text-xl font-medium content">{{ slide.content }}</p>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { Slide } from 'vue3-carousel'
import { type Blob } from '@/types/global'
import { retrieveFile, retrieveBlobData } from '@/utils/global'
import globalApi from '@/api/globalApi'
import Carousel from '@/components/Carousel/index.vue'
import SkeletonLoader from '@/widgets/Global/SkeletonLoader.vue'

const loading: Ref<boolean> = ref(false)
const slides: Ref<Blob[]> = ref([])

onMounted(() => {
  fetchPromotions()
})

const fetchPromotions = () => {
  loading.value = true
  const { getPromotions } = globalApi()

  getPromotions()
    .then((response) => {
      const { data } = response || []
      slides.value = retrieveBlobData(data)
    })

    .finally(() => {
      loading.value = false
    })
}
</script>

<style lang="scss" scoped>
.carousel-item {
  @apply h-[400px] w-full bg-cover bg-no-repeat bg-center relative;

  .content {
    @apply text-white  p-[0.75rem] bg-[#00000042] w-fit;
  }
}
</style>
