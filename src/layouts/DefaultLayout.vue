<template>
  <header>
    <AppNav />
  </header>

  <main class="pt-32">
    <div class="app__container">
      <SearchProducts />
    </div>

    <RouterView />
  </main>

  <footer></footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNav from '@/components/Partials/AppNav.vue'
import SearchProducts from '@/widgets/Global/SearchProducts.vue'
</script>
