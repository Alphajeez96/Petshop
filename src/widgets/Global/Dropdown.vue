<template>
  <aside class="w-full absolute z-50">
    <transition name="fade-slide">
      <div v-if="isVisible" class="animated-dropdown rounded">
        <slot></slot>
      </div>
    </transition>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  isVisible: boolean
}>()
</script>

<style lang="scss" scoped>
.animated-dropdown {
  @apply bg-white p-3 h-auto max-h-[250px] overflow-auto transform -translate-y-10  transition-transform duration-300 ease-in-out;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
.fade-slide-enter,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
