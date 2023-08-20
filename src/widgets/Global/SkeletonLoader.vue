<template>
  <div class="p-skeleton" :class="customClasses"></div>
</template>

<script setup lang="ts">
interface Skeleton {
  customClasses: string
}

defineProps<Skeleton>()
</script>

<style scoped>
.p-skeleton {
  content: ' ';
  width: 100%;
  height: 300px;
  background-color: #ddd;
  opacity: 0.6;
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
