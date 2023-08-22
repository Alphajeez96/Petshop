<template>
  <aside>
    <Modal
      :is-open="isOpen"
      id="auth-modal"
      label="user settings"
      describedBy="user settings"
      parentElementIdentifier="nav"
      customStyle="width: 1093px"
      @close="$emit('close')"
    >
      <UserSettings />
    </Modal>
  </aside>
</template>

<script setup lang="ts">
import Modal from '@/components/Modal/index.vue'
import UserSettings from './UserSettings.vue'

defineProps<{ isOpen: boolean }>()
defineEmits(['close'])
</script>
