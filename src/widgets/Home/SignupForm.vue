<template>
  <section class="mt-7 h-[50rem] transparent-scroll">
    <img src="@/assets/images/logo-round.svg" class="m-auto" alt="logo" />
    <h5 class="text-[#000000de] text-2xl py-6 text-center">Sign up</h5>

    <form @submit.prevent="createUser" class="w-[82%] m-auto">
      <!-- Name Region -->
      <div class="form-group">
        <div class="flex gap-6">
          <TextInput
            id="first-name"
            type="text"
            variant="secondary"
            placeholder="First Name *"
            autocomplete="off"
            v-model="payload.first_name"
            :error="v$.first_name.$error"
          />

          <TextInput
            id="last-name"
            type="text"
            variant="secondary"
            placeholder="Last Name *"
            autocomplete="off"
            v-model="payload.last_name"
            :error="v$.last_name.$error"
          />
        </div>
      </div>

      <!-- Email Here -->
      <div class="form-group">
        <TextInput
          id="email"
          type="email"
          variant="secondary"
          placeholder="Email Address *"
          autocomplete="off"
          v-model="payload.email"
          :error="v$.email.$error"
        />
      </div>

      <!-- Phonenumber Here -->
      <div class="form-group">
        <TextInput
          id="phone-number"
          type="text"
          variant="secondary"
          placeholder="Phone Number *"
          v-model="payload.phone_number"
          :error="v$.phone_number.$error"
        />
      </div>

      <!-- Addrsss Here -->
      <div class="form-group">
        <TextInput
          id="address"
          type="text"
          variant="secondary"
          placeholder="Address *"
          v-model="payload.address"
          :error="v$.address.$error"
        />
      </div>

      <!-- Password Here -->
      <div class="form-group">
        <TextInput
          id="password"
          type="password"
          variant="secondary"
          placeholder="Password *"
          autocomplete="off"
          v-model="payload.password"
          :error="v$.password.$error"
        />
        <span v-if="v$.password.$error" class="text-xs text-red-400"
          >Password must be atleast 8 characters long</span
        >
      </div>

      <!-- Confirm Password Here -->
      <div class="form-group">
        <TextInput
          id="confirm-password"
          type="password"
          variant="secondary"
          placeholder="Confirm Password *"
          autocomplete="off"
          v-model="payload.password_confirmation"
          :error="v$.password_confirmation.$error"
        />
      </div>

      <div class="form-group px-3">
        <el-checkbox v-model="payload.is_marketing" :label="label" size="large" />
      </div>

      <Button
        type="submit"
        id="signup-button"
        classes="h-9 rounded w-full box-shadow"
        :loading="loading"
      >
        <span class="text-white font-medium text-[0.938rem] w-full">SIGN UP</span>
      </Button>

      <aside class="text-center my-8">
        <a class="ml-auto" @click="emit('updateModal', 'login')"
          >Already have an account? Sign in</a
        >
      </aside>
    </form>
  </section>
</template>

<script setup lang="ts">
import { reactive, computed, ref, type Ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import { useAuthentication } from '@/composables/useAuth'
import { type SignUp, type User } from '@/types/auth'
import { ElCheckbox } from 'element-plus'
import TextInput from '@/components/TextInput/index.vue'
import Button from '@/components/Button/index.vue'
import authApi from '@/api/authApi'

const emit = defineEmits<{
  updateModal: [value: string]
  close: []
}>()

const label: string = 'I want to receive inspiration, marketing promotions and updates via email.'

const loading: Ref<boolean> = ref(false)
const payload: SignUp = reactive({
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  address: '',
  password: '',
  password_confirmation: '',
  is_marketing: false
})

const passwordRef = computed<string>(() => payload.password)

const validations = {
  first_name: { required },
  last_name: { required },
  email: { required, email },
  phone_number: { required },
  address: { required },
  password: { required, minLength: minLength(8) },
  password_confirmation: {
    required,
    minLength: minLength(8),
    sameAs: sameAs(passwordRef)
  }
}

const v$ = useVuelidate(validations, payload)

const createUser = async () => {
  try {
    const isFormCorrect = await v$.value.$validate()
    if (!isFormCorrect) return

    loading.value = true

    const { createUser } = authApi()
    const response = await createUser(payload)
    const { setSessionToken, setUserData } = useAuthentication()

    if (response.data) {
      const { data } = response || {}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const dataWithoutToken: User = (({ token, ...rest }) => rest)(data)

      setSessionToken(data.token)
      setUserData(dataWithoutToken)
      emit('close')
    }
  } catch {
    // error handler picks error from axios interceptor
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
a {
  @apply text-sm text-[#1976D2] cursor-pointer;
}
</style>
