<template>
  <section class="box-shadow">
    <p class="pb-5">Latest Orders</p>

    <div class="px-5">
      <Table :columns="columns" :data="tableData">
        <template #name>
          <!-- <el-button size="small">Edit</el-button> -->
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
import Table from '@/components/Table/index.vue'
import Pill from '@/widgets/Global/Pill.vue'
import { type Column } from '@/types/global'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },

  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

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
