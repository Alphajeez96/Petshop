<template>
  <aside id="price-sort">
    <p class="text-xs text-primary-gray pb-1">Sort by</p>
    <el-select v-model="value" class="m-2" placeholder="Select" size="large">
      <el-option v-for="(item, i) in options" :key="i" :label="item.title" :value="item.value" />
    </el-select>
  </aside>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'

interface Sort {
  title: string
  value: 'desc' | 'asc'
}

const value: Ref<string> = ref('desc')
const options: Sort[] = [
  { title: 'Lowest price first', value: 'desc' },
  { title: 'Highest price first', value: 'asc' }
]
</script>
