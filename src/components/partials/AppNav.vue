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
    <section class="flex">
      <div>
        <Button id="cart-btn" variant="secondary" :classes="buttonClasses">
          <IconCart />
          <span class="ml-2">cart (0)</span>
        </Button>
      </div>

      <div class="ml-5">
        <Button id="login-btn" variant="secondary" :classes="buttonClasses"> Login </Button>
      </div>
    </section>
  </nav>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import Button from '@/components/Button/index.vue'
import IconCart from '@/components/Icons/IconCart.vue'
import IconDropdown from '@/components/Icons/IconDropdown.vue'

const isOpen: Ref<boolean> = ref(false)
const routes: string[] = ['products', 'promotions', 'blog']
const buttonClasses: string = 'text-[15px] text-white h-12 uppercase px-5'

const handleRoute = (route: string) => {
  if (route === 'products') {
    isOpen.value = !isOpen.value
  }

  //route to other pages would go here
}
</script>

<style lang="scss" scoped>
nav {
  @apply h-20 flex items-center justify-between bg-primary-green px-40 fixed top-0 w-full z-50;

  ul {
    @apply flex items-center justify-between;

    li {
      @apply text-white font-medium flex items-center text-xl uppercase w-44 cursor-pointer;

      &:last-child {
        @apply w-0;
      }
    }
  }
}
</style>
