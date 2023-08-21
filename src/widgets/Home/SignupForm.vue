<template>
  <section class="mt-7">
    <img src="@/assets/images/logo-round.svg" class="m-auto" alt="logo" />
    <h5 class="text-[#000000de] text-2xl py-6 text-center">Sign up</h5>

    <form class="w-[82%] m-auto">
      <!-- Email Here -->
      <div class="form-group">
        <TextInput
          id="email"
          type="email"
          variant="secondary"
          placeholder="Email Adderss *"
          autocomplete="off"
          v-model="payload.email"
        />
      </div>

      <div class="form-group">
        <TextInput
          id="password"
          type="password"
          variant="secondary"
          placeholder="Password *"
          autocomplete="off"
          v-model="payload.password"
        />
      </div>

      <div class="form-group">
        <TextInput
          id="confirm-password"
          type="password"
          variant="secondary"
          placeholder="Confirm Password *"
          autocomplete="off"
          v-model="payload.password"
        />
      </div>

      <div class="form-group px-3">
        <el-checkbox v-model="checked" label="Remember me" size="large" />
      </div>

      <Button id="login-button" classes="h-9 rounded w-full box-shadow" class="h-9">
        <span class="text-white font-medium text-[0.938rem] w-full">LOG IN</span>
      </Button>

      <aside class="text-center my-8">
        <a class="ml-auto" @click="$emit('updateModal', 'login')"
          >Already have an account? Sign in</a
        >
      </aside>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { type SignUp } from '@/types/global'
import { ElCheckbox } from 'element-plus'
import TextInput from '@/components/TextInput/index.vue'
import Button from '@/components/Button/index.vue'

defineEmits<{
  updateModal: [value: string]
}>()

const checked: Ref<boolean> = ref(false)
const payload: Ref<SignUp> = ref({
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  address: '',
  password: '',
  password_confirmation: '',
  is_marketing: false
})
</script>

<style lang="scss" scoped>
a {
  @apply text-sm text-[#1976D2] cursor-pointer;
}
</style>
