<template>
  <section class="reset-password__holder">
    <h2 class="text-[#000000de] text-2xl text-center">Change Password</h2>
    <p class="text-primary-gray pt-11">
      Your new password must be different from previous passwords.
    </p>

    <form @submit.prevent="changePassword" class="mt-10">
      <!-- New Password Here -->
      <div class="form-group">
        <TextInput
          id="new-password"
          type="password"
          variant="secondary"
          placeholder="New password"
          autocomplete="new-password"
          v-model="payload.password"
          :error="v$.password.$error"
        />
      </div>

      <!-- Password COnfirmation Here -->
      <div class="form-group">
        <TextInput
          id="new-password-confirmation"
          type="password"
          variant="secondary"
          placeholder="Re-enter your new password"
          autocomplete="new-password"
          v-model="payload.password_confirmation"
          :error="v$.password_confirmation.$error"
        />
      </div>

      <Button
        type="submit"
        id="login-button"
        classes="h-9 rounded w-full box-shadow mt-5"
        :loading="loading"
      >
        <span class="text-white font-medium text-[0.938rem] w-full uppercase">Change password</span>
      </Button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { reactive, computed, ref, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { type ResetPassword } from '@/types/auth'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, sameAs } from '@vuelidate/validators'
import { useToast } from 'vue-toastification'
import authApi from '@/api/authApi'

const route = useRoute()
const router = useRouter()
const toast = useToast()

const loading: Ref<boolean> = ref(false)
const payload: ResetPassword = reactive({
  password: '',
  password_confirmation: '',
  email: '',
  token: ''
})

const passwordRef = computed<string>(() => payload.password)

const validations = {
  password: { required, minLength: minLength(8) },
  password_confirmation: {
    required,
    minLength: minLength(8),
    sameAs: sameAs(passwordRef)
  }
}

const v$ = useVuelidate(validations, payload)

const changePassword = async () => {
  try {
    loading.value = true

    const isFormCorrect = await v$.value.$validate()
    if (!isFormCorrect) return

    const { resetPassword } = authApi()

    const token = route.query.token as string
    const email = localStorage.getItem('recoveryEmail') || ''

    const response = await resetPassword({ ...payload, token, email })

    if (response.data) {
      localStorage.removeItem('recoveryEmail')
      toast.success(response.data?.message)
      router.push('/')
    }
  } catch {
    // catered for by error handler
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.reset-password__holder {
  @apply w-[26%] m-auto pt-10 pb-40;
}
</style>
