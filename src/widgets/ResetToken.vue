<template>
  <div class="py-16 px-10 m-auto">
    <div class="banner">
      <IconInfo />
      <p>For demo purposes, we are using a URL token</p>
    </div>

    <!-- Token Region Here Here -->
    <div class="pt-12">
      <p class="text-primary-gray">Click on the URL and change password</p>
      <p class="link" @click="$router.push(route)">
        {{ `${host}${route}` }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import IconInfo from '@/components/Icons/IconInfo.vue'

const props = defineProps<{
  token: string
}>()

const host = window.location?.host
const route = computed<string>(() => `/reset-password?token=${props.token}`)
</script>

<style lang="scss" scoped>
.banner {
  @apply h-12 flex items-center bg-[#e9f5fe] p-4 rounded w-[inherit];

  p {
    @apply text-sm text-[#527692] ml-4;
  }
}

.link {
  @apply text-[#1976D2] pt-1 break-all cursor-pointer;
}
</style>
