<template>
  <div class="w-1/2 mx-auto">
    <TextInput
      id="search-input"
      type="text"
      placeholder="Search products"
      v-model="searchQuery"
      hasIcon
    >
      <template #icon>
        <IconSearch />
      </template>
    </TextInput>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import TextInput from '@/components/TextInput/index.vue'
import IconSearch from '@/components/Icons/IconSearch.vue'

const searchQuery: Ref<string> = ref('')
</script>
