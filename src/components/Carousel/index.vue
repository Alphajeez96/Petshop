<template>
  <Carousel
    :id="id"
    :items-to-show="itemsToShow"
    :itemsToScroll="itemsToScroll"
    :wrap-around="wrapAround"
    :autoplay="autoplay"
    :transition="transition"
    :pauseAutoplayOnHover="pauseAutoplayOnHover"
    :breakpoints="breakPoints"
  >
    <template #slides>
      <slot />
    </template>

    <template #addons>
      <Navigation v-if="showNavigation" />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation } from 'vue3-carousel'

interface Breakpoint {
  itemsToShow: number
  snapAlign: string
}

interface SliderProps {
  id?: string
  itemsToShow: number
  itemsToScroll?: number
  wrapAround?: boolean
  autoplay: number
  transition: number
  pauseAutoplayOnHover?: boolean
  showNavigation: boolean
  breakPoints?: Record<number, Breakpoint>
}

withDefaults(defineProps<SliderProps>(), {
  id: '',
  itemsToShow: 1,
  itemsToScroll: 1,
  wrapAround: true,
  autoplay: 0,
  transition: 300,
  pauseAutoplayOnHover: true,
  showNavigation: false,
  breakPoints: () => ({
    700: { itemsToShow: 1.5, snapAlign: 'center' },
    1024: { itemsToShow: 3, snapAlign: 'start' }
  })
})
</script>
