<template>
  <div class="pill" :class="customClass">
    <span v-capitalize>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  customClass?: string
  text: string
}>()
</script>

<style scoped lang="scss">
.pill {
  @apply h-6 flex items-center justify-center text-white rounded-2xl p-2.5 w-fit;
}
</style>
