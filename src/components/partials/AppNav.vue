<template>
  <nav>
    <!-- Logo Here -->
    <section>
      <img
        src="@/assets/images/logo-white.svg"
        alt="Petson"
        class="cursor-pointer"
        @click="$router.push('/')"
      />
    </section>

    <!-- Routes Here -->
    <section>
      <ul>
        <li v-for="(route, i) in routes" :key="i" @click="handleRoute(route)">
          {{ route }}
          <span v-if="i === 0" class="ml-0.5">
            <IconDropdown :isOpen="isOpen" />
          </span>
        </li>
      </ul>
    </section>

    <!-- Action Buttons Here -->
    <section></section>
  </nav>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import IconDropdown from '@/components/icons/IconDropdown.vue'

const isOpen: Ref<boolean> = ref(false)
const routes: string[] = ['products', 'promotions', 'blog']

const handleRoute = (route: string) => {
  if (route === 'products') {
    isOpen.value = !isOpen.value
  }
  //route to other pages here
}
</script>

<style lang="scss" scoped>
nav {
  @apply h-20 flex items-center justify-between bg-primary-green px-48;

  ul {
    @apply flex items-center justify-between;

    li {
      @apply text-white font-medium flex items-center text-xl uppercase w-44 cursor-pointer;
    }
  }
}
</style>
