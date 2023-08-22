<template>
  <aside>
    <Modal
      :is-open="isOpen"
      id="recover-password-modal"
      :label="label"
      :describedBy="label"
      parentElementIdentifier=".recover-password__holder"
      customStyle="width: 540px"
      @close="isOpen = false"
    >
      <ResetToken :token="resetToken" />
    </Modal>
  </aside>

  <section class="recover-password__holder">
    <h2 class="text-[#000000de] text-2xl text-center">Recover Password</h2>
    <p class="text-primary-gray pt-11">
      Enter the email associated with your account and we’ll send an email with instructions to
      reset your password.
    </p>

    <form @submit.prevent="recoverPassword" class="mt-10">
      <!-- Email Here -->
      <div class="form-group">
        <TextInput
          id="email"
          type="email"
          variant="secondary"
          placeholder="Email Address *"
          autocomplete="email"
          v-model="userEmail"
          :error="v$.userEmail.$error"
        />

        <Button
          type="submit"
          id="login-button"
          classes="h-9 rounded w-full box-shadow mt-10"
          :loading="loading"
        >
          <span class="text-white font-medium text-[0.938rem] w-full uppercase"
            >get recovery link</span
          >
        </Button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import authApi from '@/api/authApi'
import Modal from '@/components/Modal/index.vue'
import Button from '@/components/Button/index.vue'
import ResetToken from '@/widgets/ResetToken.vue'

const label: string = 'recover password modal'

const loading: Ref<boolean> = ref(false)
const isOpen: Ref<boolean> = ref(false)
const userEmail: Ref<string> = ref('')
const resetToken: Ref<string> = ref('')

const validations = {
  userEmail: { required, email }
}

const v$ = useVuelidate(validations, { userEmail })

const recoverPassword = async () => {
  try {
    loading.value = true

    const isFormCorrect = await v$.value.$validate()
    if (!isFormCorrect) return

    const { recoverPassword } = authApi()
    const response = await recoverPassword(userEmail.value)

    if (response.data) {
      localStorage.setItem('recoveryEmail', userEmail.value)
      resetToken.value = response.data?.reset_token
      isOpen.value = true
    }
  } catch {
    // catered for by error rhandler
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.recover-password__holder {
  @apply w-[26%] m-auto pt-10 pb-40;
}
</style>
