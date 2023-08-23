<template>
  <section class="mt-20">
    <template v-if="cart.length">
      <div class="product-holder" v-for="product in cart" :key="product.uuid">
        <!-- Product Here -->
        <div class="product-holder__card box-shadow">
          <img
            :src="retrieveFile(product?.metadata?.image)"
            :alt="product?.title"
            class="h-[80%] w-[80%] object-contain"
          />
        </div>

        <!-- Product details here -->
        <div class="self-center w-1/2">
          <h5 class="text-[#000000de] text-2xl" :title="product?.title">
            {{ trimText(product?.title, 100) }}
          </h5>

          <p class="text-primary-gray font-medium text-[1.25rem] pt-0.5" v-capitalize>
            {{ product?.category?.title }}
          </p>

          <h3 class="text-[#000000de] text-[2.125rem] pt-4">{{ product?.price }} kn</h3>

          <div class="mt-10 flex items-center cart-display" id="quantity-input">
            <el-input-number v-model="product.quantity" :min="1"></el-input-number>
            <Remove class="ml-6" @click="removeFromCart(product)" />
          </div>
        </div>
      </div>

      <!-- Checkout Button Here -->
      <Button
        id="checkout-button"
        :classes="`${buttonClasses} w-10/12`"
        @click="$router.push('/checkout')"
      >
        <span class="ml-2 uppercase text-[0.938rem] font-medium w-full">proceed to checkout</span>
      </Button>
    </template>

    <!-- empty state here -->
    <div v-else>
      <el-empty description="Your cart is empty!" />

      <Button
        id="checkout-button"
        :classes="`${buttonClasses} w-1/2 mx-auto`"
        @click="$router.push('/')"
      >
        <span class="ml-2 uppercase text-[0.938rem] font-medium w-full">start shopping</span>
      </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { trimText, retrieveFile } from '@/utils/global'
import Button from '@/components/Button/index.vue'
import Remove from '@/components/Button/Remove.vue'

const buttonClasses: string = 'px-5 h-12 rounded box-shadow mt-16'
const { cart, removeFromCart } = useCartStore()
</script>

<style lang="scss" scoped>
.product-holder {
  @apply flex w-10/12 gap-[4.5rem] pb-10;
  .product-holder__card {
    @apply flex items-center justify-center p-2.5 h-[300px] w-[300px] rounded-md;
  }
}
</style>
