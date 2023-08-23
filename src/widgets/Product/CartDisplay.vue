<template>
  <section class="mt-20">
    <template v-if="true">
      <div class="product-holder" v-for="i in 3" :key="i">
        <!-- Product Here -->
        <div class="product-holder__card box-shadow">
          <img src="" alt="product" class="h-[inherit] object-contain" />
        </div>

        <!-- Product details here -->
        <div class="self-center">
          <h5 class="text-[#000000de] text-2xl">Brit Care Endurance</h5>
          <p class="text-primary-gray font-medium text-[1.25rem] pt-0.5">Animoda</p>
          <h3 class="text-[#000000de] text-[2.125rem] pt-4">200 kn</h3>

          <div class="mt-10 flex items-center cart-display" id="quantity-input">
            <el-input-number v-model="num" @change="handleChange" :min="1"></el-input-number>
            <Remove class="ml-6" />
          </div>
        </div>
      </div>

      <!-- Checkout Button Here -->
      <Button
        id="checkout-button"
        classes="px-5 h-12 rounded box-shadow w-10/12 mt-16"
        @click="$router.push('/checkout')"
      >
        <span class="ml-2 uppercase text-[0.938rem] font-medium w-full">proceed to checkout</span>
      </Button>
    </template>

    <el-empty description="Your cart is empty!" v-else />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Button/index.vue'
import Remove from '@/components/Button/Remove.vue'

const num = ref(1)

const handleChange = () => {}
</script>

<style lang="scss" scoped>
.product-holder {
  @apply flex w-10/12 gap-[4.5rem] pb-10;
  .product-holder__card {
    @apply flex items-center justify-center  pt-[0.75rem] h-[300px] w-[300px] rounded-md;
  }
}
</style>
