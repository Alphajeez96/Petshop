<template>
  <aside>
    <Modal
      :is-open="isModal"
      id="auth-modal"
      :label="label"
      :describedBy="label"
      parentElementIdentifier="nav"
      @close="isModal = false"
    >
      MODAL
    </Modal>
  </aside>

  <nav>
    <img
      src="@/assets/images/logo-white.svg"
      alt="Petson"
      class="cursor-pointer"
      @click="$router.push('/')"
    />

    <!-- Routes Here -->
    <ul>
      <li v-for="(route, i) in routes" :key="i" @click="handleRoute(route)">
        {{ route }}
        <span v-if="i === 0" class="ml-0.5">
          <IconDropdown :isOpen="isOpen" />
        </span>
      </li>
    </ul>

    <!-- Action Buttons Here -->
    <div class="flex">
      <Button id="cart-btn" variant="secondary" :classes="buttonClasses">
        <IconCart />
        <span class="ml-2">cart (0)</span>
      </Button>

      <div class="ml-5">
        <Button id="login-btn" variant="secondary" :classes="buttonClasses" @click="isModal = true">
          Login
        </Button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'

const modalType: Ref<string> = ref('login')
const isModal: Ref<boolean> = ref(false)
const isOpen: Ref<boolean> = ref(false)
const routes: string[] = ['products', 'promotions', 'blog']
const buttonClasses: string = 'text-[15px] text-white h-12 uppercase px-5'

const label = computed(() => {
  return `${modalType.value} modal`
})

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
