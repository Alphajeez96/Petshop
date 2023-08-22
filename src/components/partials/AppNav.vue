<template>
  <aside>
    <Modal
      :is-open="isModal"
      id="auth-modal"
      :label="label"
      :describedBy="label"
      parentElementIdentifier="nav"
      @close="closeModal"
    >
      <LoginForm v-if="modalType === 'login'" @updateModal="updateModalType" @close="closeModal" />
      <SignupForm v-else @updateModal="updateModalType" @close="closeModal" />
    </Modal>

    <!-- User Modal Here -->
    <UserModal :isOpen="isUserModal" @close="isUserModal = false" />
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
        <Button
          id="login-btn"
          variant="secondary"
          :classes="buttonClasses"
          @click="handleClick"
          :loading="isLoggingOut"
        >
          {{ isLoggedIn ? 'logout' : 'login' }}
        </Button>
      </div>

      <!-- Avatar Here -->
      <div v-if="isLoggedIn" class="user-avatar" @click="isUserModal = true">
        <p>{{ initials }}</p>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, type Ref, toRef } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useAuthentication } from '@/composables/useAuth'
import Button from '@/components/Button/index.vue'
import IconCart from '@/components/Icons/IconCart.vue'
import IconDropdown from '@/components/Icons/IconDropdown.vue'
import Modal from '@/components/Modal/index.vue'
import LoginForm from '@/widgets/Home/LoginForm.vue'
import SignupForm from '@/widgets/Home/SignupForm.vue'
import UserModal from '@/widgets/User/UserModal.vue'

const routes: string[] = ['products', 'promotions', 'blog']
const buttonClasses: string = 'text-[15px] text-white h-12 uppercase px-5'

const isUserModal: Ref<boolean> = ref(false)
const isModal: Ref<boolean> = ref(false)
const isOpen: Ref<boolean> = ref(false)
const modalType: Ref<string> = ref('login')

const initials = toRef(useAuthStore(), 'initials')
const isLoggedIn = toRef(useAuthStore(), 'isAuthenticated')
const { handleLogout, isLoggingOut } = useAuthentication()

const label = computed<string>(() => `${modalType.value} modal`)

const updateModalType = (value: string) => {
  modalType.value = value
}

const closeModal = () => {
  isModal.value = false
  modalType.value = 'login'
}

const handleClick = () => {
  if (isLoggedIn.value) {
    handleLogout()
  } else {
    isModal.value = true
  }
}

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

  .user-avatar {
    @apply ml-5 h-12 w-12 border border-white rounded-full cursor-pointer flex items-center justify-center cursor-pointer;

    p {
      @apply text-white font-medium;
    }
  }
}
</style>
