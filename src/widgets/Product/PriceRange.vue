<template>
  <FilterToggle :isOpen="true" title="price">
    <div class="mt-4 w-full">
      <el-slider
        v-model="value"
        :show-tooltip="false"
        :step="100"
        :max="5000"
        label="price range"
      />
    </div>

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

const value: Ref<number> = ref(0)
</script>

<style lang="scss" scoped>
input {
  @apply rounded bg-inherit w-[78px] h-8 text-sm text-[#0000008a] border border-[#0000003b] px-3 outline-none focus:outline-none;
}
</style>
