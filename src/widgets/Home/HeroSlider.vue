<template>
  <div class="mt-9">
    <Carousel
      :items-to-show="1"
      :autoplay="3500"
      :show-navigation="false"
      :transition="600"
      :break-points="{}"
    >
      <Slide v-for="i in 3" :key="i">
        <div class="carousel__item">{{ i }}</div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import Carousel from '@/components/Carousel/index.vue'
import { Slide } from 'vue3-carousel'
</script>

<style scoped>
.carousel__item {
  height: 400px;
  width: 100%;
  background-color: blue;
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
