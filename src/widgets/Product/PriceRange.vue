<template>
  <FilterToggle :isOpen="isOpen" title="price" @click="isOpen = !isOpen">
    <div class="mt-4 w-full">
      <el-slider
        v-model="value"
        :show-tooltip="false"
        :step="1000"
        :max="40000"
        label="price range"
      />
    </div>

    <!-- Input Here -->
    <div class="flex justify-end mt-2 relative">
      <div id="price-range">
        <el-input-number v-model="value" :controls="false" />
      </div>
      <span class="flex items-center h-8 px-3.5 absolute text-sm text-[#0000008a] z-50">kn</span>
    </div>
  </FilterToggle>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { ElSlider, ElInputNumber } from 'element-plus'
import FilterToggle from './FilterToggle.vue'

defineEmits(['change'])

const isOpen: Ref<boolean> = ref(true)
const value: Ref<number> = ref(0)
</script>
