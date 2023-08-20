<template>
  <FilterToggle :isOpen="isOpen" title="brand" @click="isOpen = !isOpen">
    <div class="text-[#0000008a] mt-4 flex items-center w-full" v-for="i in 3" :key="i">
      <p>Alleva Equilibrium</p>
      <p class="ml-auto">(7)</p>
    </div>
  </FilterToggle>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import FilterToggle from './FilterToggle.vue'

const isOpen: Ref<boolean> = ref(true)
</script>
