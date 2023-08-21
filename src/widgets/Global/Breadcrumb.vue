<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, i) in breadcrumbs" :key="i" :to="{ path: item?.path }">{{
      capitalizeText(item?.title)
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { type Breadcrumb } from '@/types/global'
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { capitalizeText } from '@/utils/global'

defineProps<{
  breadcrumbs: Breadcrumb[]
}>()
</script>
