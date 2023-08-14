<template>
  <component :is="$route.meta.layout || DefaultLayout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'
</script>
