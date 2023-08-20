<template>
  <article
    class="product-card"
    :class="{ 'hover-animation': isHovered, 'has-button': hasButton }"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
  >
    <div class="product-card__image">
      <img src="@/assets/images/product.png" class="object-contain" alt="product" />
    </div>

    <div class="product-card__details">
      <a>Brit care endurance</a>
      <p class="text-primary-gray pt-1">Animoda</p>
      <p class="text-black text-xl font-medium pt-1">200 Kn</p>

      <!-- Action Button Here -->
      <div class="mt-3" v-if="hasButton">
        <Button id="cart-btn" class="rounded" classes="h-[30px] px-4 rounded">
          <IconCart />
          <span class="ml-2">add to cart</span>
        </Button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import Button from '@/components/Button/index.vue'
import IconCart from '@/components/Icons/IconCart.vue'
import { type Product } from '@/types/products'

interface ProductCard extends Product {
  hasButton?: boolean
}

withDefaults(defineProps<ProductCard>(), {
  hasButton: false,
  title: '',
  category: '',
  price: '',
  image: ''
})

const isHovered: Ref<boolean> = ref(false)
</script>

<style lang="scss" scoped>
.product-card {
  @apply p-5 cursor-pointer h-[398px] w-[288px] rounded-md;
  transition: box-shadow 0.3s ease-in-out;

  &.has-button {
    @apply h-[448px];
  }

  .product-card__image {
    @apply flex items-center justify-center m-auto pt-[0.75rem] h-[220px];
  }

  .product-card__details {
    @apply mx-auto w-5/6 mt-9 text-left;

    a {
      @apply text-black text-xl font-medium underline;
    }
  }

  &:hover {
    box-shadow:
      0px 0px 1px 0px rgba(0, 0, 0, 0.17),
      0px 2px 4px 0px rgba(0, 0, 0, 0.16);
  }

  &.hover-animation {
    animation: hoverAnimation 0.3s ease-in-out forwards;
  }
}

@keyframes hoverAnimation {
  from {
    box-shadow: none;
  }
  to {
    box-shadow:
      0px 0px 1px 0px rgba(0, 0, 0, 0.17),
      0px 2px 4px 0px rgba(0, 0, 0, 0.16);
  }
}
</style>
