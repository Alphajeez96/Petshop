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
          :src="retrieveFile(product?.metadata?.image as string)"
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
            {{ capitalizeText(product?.category?.title as string) }}
          </h4>
        </article>

        <!-- Action Button region -->
        <SkeletonLoader v-if="loading" custom-classes="h-[100px] w-full mt-12" />
        <div v-else class="mt-12">
          <h2 class="text-[#000000de] text-6xl">{{ product?.price }} Kn</h2>
          <div class="flex mt-7">
            <Button id="product-cart" classes="px-5 h-12 rounded">
              <IconCart />
              <span class="ml-2 uppercase text-[0.938rem] font-medium">add to cart</span>
            </Button>

            <!-- Quantity control Here -->
            <div class="ml-7" id="quantity-input">
              <el-input-number :min="1" v-model="quantity" />
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
import { ref, onMounted, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { type Breadcrumb } from '@/types/global'
import { type Product } from '@/types/products'
import { retrieveFile, capitalizeText, trimText, scrollToTop } from '@/utils/global'
import { ElInputNumber } from 'element-plus'
import BreadcrumbVue from '@/widgets/Global/Breadcrumb.vue'
import Button from '@/components/Button/index.vue'
import IconCart from '@/components/Icons/IconCart.vue'
import SkeletonLoader from '@/widgets/Global/SkeletonLoader.vue'
import productsApi from '@/api/productsApi'

const route = useRoute()

const loading: Ref<boolean> = ref(false)
const quantity: Ref<number> = ref(0)
const product: Ref<Product | undefined> = ref(undefined)
const breadCrumbs: Ref<Breadcrumb[]> = ref([{ title: 'Homepage', path: '/' }])

onMounted(() => {
  getProductDetails()
  scrollToTop()
})

const getProductDetails = async () => {
  try {
    loading.value = true
    const { getSingleProduct } = productsApi()
    const response = await getSingleProduct(route.params.uuid as string)
    const { data } = response

    product.value = data

    breadCrumbs.value.push(
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
