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
          placeholder="Email Adderss *"
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
        class="h-9"
        :loading="loading"
      >
        <span class="text-white font-medium text-[0.938rem] w-full">SIGN UP</span>
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
import { reactive, computed, ref, type Ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs } from '@vuelidate/validators'
import { type SignUp } from '@/types/auth'
import { ElCheckbox } from 'element-plus'
import TextInput from '@/components/TextInput/index.vue'
import Button from '@/components/Button/index.vue'
import authApi from '@/api/authApi'

defineEmits<{
  updateModal: [value: string]
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

const passwordRef = computed(() => payload.password)

const rules = {
  first_name: { required },
  last_name: { required },
  email: { required, email },
  phone_number: { required },
  address: { required },
  password: { required },
  password_confirmation: {
    required,
    sameAs: sameAs(passwordRef)
  }
}

const v$ = useVuelidate(rules, payload)

const createUser = async () => {
  try {
    const isFormCorrect = await v$.value.$validate()
    if (!isFormCorrect) return

    loading.value = true

    const { createUser } = authApi()
    const response = await createUser(payload)

    console.log('SIGNUP RESP::', response)
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
