<template>
  <div class="input-wrapper">
    <div class="icon-holder" v-if="hasIcon">
      <slot name="icon" />
    </div>

    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :class="computedClasses"
      :disabled="disabled"
      :readonly="readonly"
      :aria-labelledby="id"
      v-bind="$attrs"
      @input="handleInput"
    />
    <label :for="id">{{ placeholder }}</label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

interface TextInput {
  id: string
  placeholder: string
  type: 'text' | 'email' | 'password' | 'number'
  modelValue: string
  classes?: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  readonly?: boolean
  hasIcon?: boolean
}

const props = withDefaults(defineProps<TextInput>(), {
  id: '',
  placeholder: 'placeholder',
  type: 'text',
  modelValue: '',
  classes: '',
  variant: 'primary',
  disabled: false,
  readonly: false,
  hasIcon: false
})

const computedClasses = computed<string>(() => {
  const hasIcon: string = props.hasIcon ? 'icon' : ''
  return `${props.variant} ${props.classes} ${hasIcon}`
})

const handleInput = (event: Event) => {
  if (event.target) {
    emit('update:modelValue', (event.target as HTMLInputElement).value)
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  @apply relative mx-[0.625rem] inline-block leading-[0.75rem] w-full;

  label {
    @apply text-[#8FDDBD] text-base absolute z-10 left-5 top-4 px-1 pointer-events-none bg-white origin-top-left transition-transform duration-150 ease-in;

    &.active {
      @apply transform -translate-y-full scale-75;
    }
  }

  input {
    @apply h-14 text-base text-black outline-none border border-primary-green px-5 rounded relative w-full;

    &.icon {
      @apply px-10;

      & + label {
        @apply left-10;
      }
    }

    &.secondary {
      @apply border-[#c4c4c4];

      & + label {
        @apply text-primary-gray;
      }
    }

    &.invalid {
      @apply translate-y-0 border border-red-500;
    }

    &:focus {
      @apply border-2;

      & + label {
        @apply text-primary-green transform -translate-y-6 scale-75;
      }

      &.secondary {
        & + label {
          @apply text-black;
        }
      }
    }
  }

  .icon-holder {
    @apply absolute left-3 top-4 z-10;
  }
}
</style>
