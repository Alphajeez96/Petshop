<template>
  <section class="w-3/5 pt-8 pb-32 m-auto">
    <BreadcrumbVue :breadcrumbs="breadcrumbs" />
    <h1 class="text-primary-green font-light text-6xl pt-7">Your Cart</h1>

    <!-- Item Display Here -->
    <CartDisplay />
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { scrollToTop } from '@/utils/global'
import { type Breadcrumb } from '@/types/global'
import BreadcrumbVue from '@/widgets/Global/Breadcrumb.vue'
import CartDisplay from '@/widgets/Product/CartDisplay.vue'

const breadcrumbs: Breadcrumb[] = [
  { title: 'Homepage', path: '/' },
  { title: 'Your Cart', path: '' }
]

onMounted(() => {
  scrollToTop()
})
</script>
