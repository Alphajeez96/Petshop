<template>
  <header>
    <AppNav />
  </header>

  <main class="pt-32">
    <div class="app-container" v-if="!hideSearchBar">
      <SearchProducts />
    </div>
    <RouterView />
  </main>

  <footer class="bg-[#EDF5F1] h-[300px]">
    <AppFooter />
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppNav from '@/components/Partials/AppNav.vue'
import AppFooter from '@/components/Partials/AppFooter.vue'
import SearchProducts from '@/widgets/Global/SearchProducts.vue'

const route = useRoute()
const excluded: string[] = ['forgot-password', 'reset-password', 'cart']

const hideSearchBar = computed<boolean>(() => excluded.includes(route?.name as string))
</script>
