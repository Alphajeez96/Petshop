<template>
  <transition name="fade-up">
    <div
      v-if="isOpen"
      :id="id"
      :ref="id"
      tabindex="0"
      class="modal-container p-pat-blur-background"
      role="dialog"
      :aria-label="label"
      aria-modal="true"
      :aria-describedby="describedBy"
      @click="close"
      @keydown.esc="close"
    >
      <div class="modal-container__panel">
        <div class="modal" :style="customStyle" @click.stop>
          <button
            id="close-modal"
            class="absolute top-0 right-0 mt-6 mr-6"
            aria-label="close modal"
            @click="close"
          >
            <IconClose />
          </button>
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import IconClose from '@/components/Icons/IconClose.vue'

interface Modal {
  isOpen: boolean
  id: string
  label: string
  describedBy: string
  customStyle?: string
  parentElementIdentifier: string
}

const props = defineProps<Modal>()
const emit = defineEmits(['close'])

const close = (): void => {
  emit('close')

  const parentElem = document.querySelector(props.parentElementIdentifier) as HTMLElement
  if (parentElem) parentElem.focus()
}
</script>

<style lang="scss" scoped>
.modal-backdrop {
  @apply w-full h-screen fixed top-0 right-0 hidden invisible opacity-0;

  z-index: 1000;
  will-change: opacity;
  transition: opacity 0.233s cubic-bezier(0, 0, 0.21, 1);
}
.modal-container {
  @apply h-screen w-screen justify-center flex items-center fixed top-0 right-0 bg-[#1d1e2c52] z-[1002];
  backdrop-filter: blur(10px);

  &__panel {
    @media (max-width: 640px) {
      @apply w-11/12 mx-auto;
    }

    .modal {
      @apply mx-auto rounded-md bg-white relative p-5 outline-none;

      min-width: 90%;

      @media (min-width: 640px) {
        min-width: 540px;
        min-height: 120px;
      }
    }
  }
}
</style>
