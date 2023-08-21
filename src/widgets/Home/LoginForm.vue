<template>
  <section class="mt-7">
    <img src="@/assets/images/logo-round.svg" class="m-auto" alt="logo" />
    <h5 class="text-[#000000de] text-2xl py-6 text-center">Log in</h5>

    <form class="w-[82%] m-auto">
      <!-- Email Here -->
      <div class="form-group">
        <TextInput
          id="email"
          type="email"
          variant="secondary"
          placeholder="Email Adderss *"
          autocomplete="email"
          v-model="payload.email"
        />
      </div>

      <!-- Password Here -->
      <div class="form-group">
        <TextInput
          id="password"
          type="password"
          variant="secondary"
          placeholder="Password *"
          autocomplete="current-password"
          v-model="payload.password"
        />
      </div>

      <div class="form-group px-3">
        <el-checkbox v-model="checked" label="Remember me" size="large" />
      </div>

      <Button id="login-button" classes="h-9 rounded w-full box-shadow" class="h-9">
        <span class="text-white font-medium text-[0.938rem] w-full">LOG IN</span>
      </Button>

      <aside class="flex my-8">
        <a @click="$router.push('/forgot-password')"> Forgot password?</a>
        <a class="ml-auto" @click="$emit('updateModal', 'signup')"
          >Don’t have an account? Sign Up</a
        >
      </aside>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { type Login } from '@/types/global'
import { ElCheckbox } from 'element-plus'
import TextInput from '@/components/TextInput/index.vue'
import Button from '@/components/Button/index.vue'

defineEmits<{
  updateModal: [value: string]
}>()

const checked: Ref<boolean> = ref(false)
const payload: Ref<Login> = ref({
  email: '',
  password: ''
})
</script>

<style lang="scss" scoped>
a {
  @apply text-sm text-[#1976D2] cursor-pointer;
}
</style>
