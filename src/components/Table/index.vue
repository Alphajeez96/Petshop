<template>
  <div>
    <el-table v-if="data?.length" :data="data" :style="{ width: width }">
      <el-table-column
        v-for="column in columns"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
      >
        <template v-slot="scope">
          <slot :name="column.prop" :row="scope.row" />
        </template>
      </el-table-column>
    </el-table>

    <el-empty v-else />
  </div>
</template>

<script setup lang="ts">
import { type Column } from '@/types/global'

defineProps<{
  columns: Column[]
  data: Record<string, any>[]
  width?: string
}>()
</script>
