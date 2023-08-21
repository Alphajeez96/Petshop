<template>
  <SkeletonLoader customClasses="h-[398px] w-[288px]" v-if="loading" />

  <article
    v-else
    class="product-card"
    :class="{ 'hover-animation': isHovered, 'has-button': hasButton }"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
  >
    <div class="product-card__image">
      <img
        :src="retrieveFile(product?.metadata?.image)"
        class="h-[inherit] object-contain"
        :alt="product?.title"
        loading="lazy"
      />
    </div>

    <div class="product-card__details">
      <a :title="product?.title">{{ trimText(product?.title, 20) }}</a>
      <p class="text-primary-gray pt-1" :title="productCategory">
        {{ productCategory }}
      </p>
      <p class="text-black text-xl font-medium pt-1">{{ product?.price }} Kn</p>

      <!-- Action Button Here -->
      <div class="mt-3" v-if="hasButton">
        <Button id="cart-btn" class="rounded" classes="h-[30px] px-4 rounded">
          <IconCart height="16" width="16" />
          <span class="ml-2 uppercase text-[13px] font-medium">add to cart</span>
        </Button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import { type Product } from '@/types/products'
import { trimText, capitalizeText, retrieveFile } from '@/utils/global'
import Button from '@/components/Button/index.vue'
import IconCart from '@/components/Icons/IconCart.vue'
import SkeletonLoader from '@/widgets/Global/SkeletonLoader.vue'

const props = defineProps<{
  hasButton?: boolean
  loading: boolean
  product: Product
}>()

const productCategory = computed(() => {
  return capitalizeText(trimText(props.product?.category?.title!, 30))
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
