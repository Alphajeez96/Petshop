<template>
  <section class="box-shadow">
    <p class="pb-5">Latest Orders</p>

    <div class="px-5">
      <Table :columns="columns" :data="[]">
        <template #name>
          <Pill text="test" />
        </template>

        <template #address="{ row }">
          {{ row.address }}
        </template>

        <template #date="{ row }">
          {{ row.date }}
        </template>
      </Table>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type Column } from '@/types/global'
import Pill from '@/widgets/Global/Pill.vue'
import Table from '@/components/Table/index.vue'

const columns: Column[] = [
  { prop: 'date', label: 'Order UUID' },
  { prop: 'name', label: 'Status' },
  { prop: 'address', label: 'Download Invoice' }
]
</script>

<style lang="scss" scoped>
section {
  @apply mx-8 p-5 my-12 rounded;
}
</style>
