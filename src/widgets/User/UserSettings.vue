<template>
  <section class="mt-4">
    <h5 class="text-2xl text-center text-[#000000de]">User settings</h5>

    <article class="gap-16">
      <!--  Avatar here-->
      <div class="avatar">
        <p>{{ initials }}</p>
      </div>

      <!-- Biodata here -->
      <section class="border-l border-l-[#DDE3E2] w-9/12">
        <div class="flex justify-around ml-12 pb-9">
          <!-- Name Here -->
          <div class="bio-data__holder">
            <p class="caption">Name</p>
            <p class="text-[#000000de]" v-capitalize>{{ name }}</p>
          </div>

          <!-- Number Here -->
          <div class="bio-data__holder">
            <p class="caption">Phone number</p>
            <p class="text-[#000000de]">{{ user?.phone_number }}</p>
          </div>

          <!-- Address Here -->
          <div class="bio-data__holder">
            <p class="caption">Address</p>
            <p class="text-[#000000de]">{{ user?.address }}</p>
          </div>
        </div>

        <!-- Date Joined Here -->
        <div class="flex justify-around ml-12">
          <div class="bio-data__holder">
            <p class="caption">Date joined</p>
            <p class="text-[#000000de]">{{ formatDate(user?.created_at!) }}</p>
          </div>

          <!-- Email Here -->
          <div class="bio-data__holder">
            <p class="caption">Email</p>
            <p class="text-[#000000de]">{{ user?.email }}</p>
          </div>

          <!-- Marketing preferences Here -->
          <div class="bio-data__holder">
            <p class="caption">Marketing preferences</p>
            <p class="text-[#000000de]">{{ user?.is_marketing ? 'Yes' : 'No' }}</p>
          </div>
        </div>
      </section>
    </article>
  </section>
</template>

<script setup lang="ts">
import { toRef, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { formatDate } from '@/utils/global'

const { user } = useAuthStore()

const name = computed<string>(() => `${user?.first_name} ${user?.last_name}`)
const initials = toRef(useAuthStore(), 'initials')
</script>

<style lang="scss" scoped>
article {
  @apply flex mt-14 pl-24;
  .avatar {
    @apply flex items-center justify-center h-[141px] w-[141px] rounded-full border border-primary-gray;

    p {
      @apply text-6xl text-[#000000de];
    }
  }

  .bio-data__holder {
    @apply w-[30%];

    .caption {
      @apply text-xs text-primary-gray;
    }
  }
}
</style>
