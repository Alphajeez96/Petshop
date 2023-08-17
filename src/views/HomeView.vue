<template>
  <main class="h-screen">
    THIS IS HOME: {{ test }}

    <TextInput id="search-input" type="text" placeholder="eee" variant="secondary" v-model="test" />
  </main>
</template>

<script setup lang="ts">
import TextInput from '@/components/TextInput/index.vue'
import { ref } from 'vue'

const test = ref('')
</script>
