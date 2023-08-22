<template>
  <button
    :id="id"
    :type="type"
    :class="computedClasses"
    :style="customStyles"
    :disabled="disabled || loading"
    :aria-disabled="disabled"
    :aria-label="id"
    @click="$emit('click')"
  >
    <template v-if="loading">
      <Spinner />
    </template>

    <template v-else>
      <slot />
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Spinner from '../Icons/IconSpinner.vue'

interface Button {
  id: string
  type?: 'button' | 'submit'
  classes: string
  customStyles?: string
  disabled?: boolean
  loading?: boolean
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Button>(), {
  id: '',
  type: 'button',
  classes: '',
  customStyles: '',
  disabled: false,
  loading: false,
  variant: 'primary'
})

const computedClasses = computed<string>(() => `${props.variant} ${props.classes}`)
</script>

<style lang="scss" scoped>
button {
  @apply flex items-center  font-medium focus:outline-none;

  &.primary {
    @apply bg-primary-green text-white;
  }

  &.secondary {
    @apply bg-inherit border border-white rounded;
  }

  &:disabled {
    @apply cursor-not-allowed opacity-75;
  }
}
</style>
