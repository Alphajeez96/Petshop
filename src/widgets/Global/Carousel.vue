<template>
  <Carousel
    :items-to-show="itemsToShow"
    :wrap-around="wrapAround"
    :autoplay="autoplay"
    :breakpoints="breakPoints"
  >
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

interface Breakpoint {
  itemsToShow: number
  snapAlign: string
}

interface SliderProps {
  itemsToShow: number
  wrapAround: boolean
  autoplay: number
  breakPoints?: Record<number, Breakpoint>
}

withDefaults(defineProps<SliderProps>(), {
  itemsToShow: 1,
  wrapAround: false,
  autoplay: 0,
  breakPoints: () => ({
    700: { itemsToShow: 3.5, snapAlign: 'center' },
    1024: { itemsToShow: 4, snapAlign: 'start' }
  })
})
</script>

<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: green;
  color: red;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
