<template>
  <section>
    <div class="flex items-center">
      <p class="text-sm uppercase mr-auto font-medium">{{ title }}</p>
      <IconDropdown :isOpen="isOpen" fill="black" @click="$emit('click')" />
    </div>

    <slot v-if="isOpen" />
  </section>
</template>

<script setup lang="ts">
import IconDropdown from '@/components/Icons/IconDropdown.vue'

defineEmits(['click'])
defineProps<{
  isOpen: boolean
  title: string
}>()
</script>
