<template>
  <section class="mt-7">
    <img src="@/assets/images/logo-round.svg" class="m-auto" alt="logo" />
    <h5 class="text-[#000000de] text-2xl py-6 text-center">Log in</h5>

    <form @submit.prevent="loginUser" class="w-[82%] m-auto">
      <!-- Email Here -->
      <div class="form-group">
        <TextInput
          id="email"
          type="email"
          variant="secondary"
          placeholder="Email Address *"
          autocomplete="email"
          v-model="payload.email"
          :error="v$.email.$error"
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
          :error="v$.password.$error"
        />
      </div>

      <div class="form-group px-3">
        <el-checkbox v-model="checked" label="Remember me" size="large" />
      </div>

      <Button
        type="submit"
        id="login-button"
        classes="h-9 rounded w-full box-shadow"
        :loading="loading"
      >
        <span class="text-white font-medium text-[0.938rem] w-full">LOG IN</span>
      </Button>

      <aside class="flex my-8">
        <a @click="handleRoute"> Forgot password?</a>
        <a class="ml-auto" @click="$emit('updateModal', 'signup')"
          >Don’t have an account? Sign Up</a
        >
      </aside>
    </form>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue'
import { type Login } from '@/types/auth'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useAuthentication } from '@/composables/useAuth'
import { ElCheckbox } from 'element-plus'
import TextInput from '@/components/TextInput/index.vue'
import Button from '@/components/Button/index.vue'
import authApi from '@/api/authApi'

const emit = defineEmits<{
  updateModal: [value: string]
  close: []
}>()

const router = useRouter()

const loading: Ref<boolean> = ref(false)
const checked: Ref<boolean> = ref(false)
const payload: Login = reactive({
  email: '',
  password: ''
})

const validations = {
  email: { required, email },
  password: { required }
}

const v$ = useVuelidate(validations, payload)

const loginUser = async () => {
  try {
    const isFormCorrect = await v$.value.$validate()
    if (!isFormCorrect) return

    loading.value = true

    const { loginUser, fetchUser } = authApi()
    const loginResponse = await loginUser(payload)
    const { setSessionToken, setUserData } = useAuthentication()

    if (loginResponse.data) {
      setSessionToken(loginResponse.data?.token)

      const userResponse = await fetchUser()
      setUserData(userResponse.data)
      emit('close')
    }
  } catch {
    // error handler picks error from axios interceptor
  } finally {
    loading.value = false
  }
}

const handleRoute = () => {
  router.push('/forgot-password')
  emit('close')
}
</script>

<style lang="scss" scoped>
a {
  @apply text-sm text-[#1976D2] cursor-pointer;
}
</style>
