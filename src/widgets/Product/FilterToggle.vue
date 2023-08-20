<template>
  <section>
    <div class="flex items-center">
      <p class="text-sm uppercase mr-auto font-medium">{{ title }}</p>
      <IconDropdown :isOpen="isOpen" fill="black" />
    </div>

    <slot v-if="isOpen" />
  </section>
</template>

<script setup lang="ts">
import IconDropdown from '@/components/Icons/IconDropdown.vue'
defineProps<{
  isOpen: boolean
  title: string
}>()
</script>
