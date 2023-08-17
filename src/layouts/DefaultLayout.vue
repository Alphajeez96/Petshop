<template>
  <header>
    <AppNav />
  </header>

  <main class="pt-20">
    <RouterView />
  </main>

  <footer></footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNav from '@/components/Partials/AppNav.vue'
</script>
