<template>
  <div class="p-skeleton" :class="customClasses"></div>
</template>

<script setup lang="ts">
defineProps<{
  customClasses: string
}>()
</script>

<style scoped>
.p-skeleton {
  @apply content-[''] bg-[#ddd] opacity-60;
  animation: pulse-bg 1.5s ease-in-out infinite normal both;
}

@keyframes pulse-bg {
  0% {
    @apply bg-gray-400;
  }
  50% {
    @apply bg-gray-300;
  }
  100% {
    @apply bg-gray-400;
  }
}
</style>
