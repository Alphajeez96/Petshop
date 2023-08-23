<template>
  <section class="w-[70%] mx-auto mt-16 pb-36">
    <BreadcrumbVue :breadcrumbs="breadCrumbs" />

    <!-- Product display Here -->
    <div class="flex justify-around my-28">
      <!-- Product Image Here -->
      <div class="flex items-center justify-center m-auto p-6 h-[652px] w-1/2">
        <SkeletonLoader v-if="loading" custom-classes="h-[650px] w-full" />
        <img
          v-else
          :src="retrieveFile(product?.metadata?.image!)"
          :alt="product?.title"
          class="object-contain h-[inherit]"
        />
      </div>

      <!-- Product Details Here -->
      <div class="flex flex-col justify-between self-center w-[42%] ml-auto">
        <SkeletonLoader v-if="loading" custom-classes="h-[200px] w-full" />
        <article v-else>
          <h3 class="text-[#000000de] text-5xl leading-snug">{{ product?.title }}</h3>
          <h4 class="text-primary-gray text-[2.125rem] pt-3">
            {{ capitalizeText(product?.category?.title!) }}
          </h4>
        </article>

        <!-- Action Button region -->
        <SkeletonLoader v-if="loading" custom-classes="h-[100px] w-full mt-12" />
        <div v-else class="mt-12">
          <h2 class="text-[#000000de] text-6xl">{{ product?.price }} Kn</h2>
          <div class="flex mt-7">
            <Remove v-if="isInCart" height="3rem" @click="handleProductRemoval(product!)" />

            <Button
              v-else
              v
              id="product-cart"
              classes="px-5 h-12 rounded box-shadow"
              @click="addProductToCart"
            >
              <IconCart />
              <span class="ml-2 uppercase text-[0.938rem] font-medium">add to cart</span>
            </Button>

            <!-- Quantity control Here -->
            <div class="ml-7" id="quantity-input">
              <el-input-number
                :min="1"
                v-model="quantity"
                @change="(value) => updateQuantity(product!, value!)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Description Here -->
    <article class="mt-16">
      <p class="text-[#000000de] leading-8">
        {{ product?.description }}
      </p>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { type Breadcrumb } from '@/types/global'
import { type Product } from '@/types/products'
import { retrieveFile, capitalizeText, trimText, scrollToTop, debounce } from '@/utils/global'
import { ElInputNumber } from 'element-plus'
import BreadcrumbVue from '@/widgets/Global/Breadcrumb.vue'
import Button from '@/components/Button/index.vue'
import Remove from '@/components/Button/Remove.vue'
import IconCart from '@/components/Icons/IconCart.vue'
import SkeletonLoader from '@/widgets/Global/SkeletonLoader.vue'
import productsApi from '@/api/productsApi'

const route = useRoute()
const { addToCart, cart, removeFromCart, findProductInCart, updateQuantity } = useCartStore()

const loading: Ref<boolean> = ref(false)
const isInCart: Ref<boolean> = ref(false)
const quantity: Ref<number> = ref(1)
const product: Ref<Product | undefined> = ref(undefined)
const breadCrumbs: Ref<Breadcrumb[]> = ref([])

watch(
  () => route.params.uuid,
  (newUuid) => {
    if (newUuid) getProductDetails()
  }
)

watch(cart, () => {
  isInCart.value = !!findProductInCart(currentProduct.value.uuid!)
})

const currentProduct = computed<Product>(() => product.value!)

onMounted(() => {
  getProductDetails()
  scrollToTop()
})

const addProductToCart = debounce(() => {
  addToCart(currentProduct.value, quantity.value)
}, 100)

const handleProductRemoval = (product: Product) => {
  removeFromCart(product)
  quantity.value = 1
}

const productDataSync = () => {
  const existingProduct = findProductInCart(product.value?.uuid!)

  if (existingProduct) {
    isInCart.value = !!existingProduct
    quantity.value = existingProduct.quantity!
  }
}

const getProductDetails = async () => {
  try {
    loading.value = true
    breadCrumbs.value = []

    const { getSingleProduct } = productsApi()
    const response = await getSingleProduct(route.params?.uuid as string)
    const { data } = response

    product.value = data
    productDataSync()
    breadCrumbs.value.push(
      { title: 'Homepage', path: '/' },
      { title: data.category?.title, path: `/shop/${data.category?.uuid}` },
      { title: trimText(data.title, 40), path: '' }
    )
  } catch {
    // No need for specific error handling in this case
  } finally {
    loading.value = false
  }
}
</script>
