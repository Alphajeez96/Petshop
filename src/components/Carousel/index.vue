<template>
  <Carousel
    :items-to-show="itemsToShow"
    :itemsToScroll="itemsToScroll"
    :wrap-around="wrapAround"
    :autoplay="autoplay"
    :transition="transition"
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
  itemsToShow: number
  itemsToScroll?: number
  wrapAround?: boolean
  autoplay: number
  transition: number
  showNavigation: boolean
  breakPoints?: Record<number, Breakpoint>
}

withDefaults(defineProps<SliderProps>(), {
  itemsToShow: 1,
  itemsToScroll: 1,
  wrapAround: true,
  autoplay: 0,
  transition: 300,
  showNavigation: false,
  breakPoints: () => ({
    700: { itemsToShow: 3.5, snapAlign: 'center' },
    1024: { itemsToShow: 4, snapAlign: 'start' }
  })
})
</script>
