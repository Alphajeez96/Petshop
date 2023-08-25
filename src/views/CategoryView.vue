<template>
  <section class="flex gap-20 px-20 my-28">
    <!-- Side Bar here -->
    <aside class="py-32 w-1/5">
      <PriceRange />
      <BrandFilter class="mt-14" />
      <CategoryFilter class="mt-14" />
    </aside>

    <div class="w-[70%]">
      <h2 class="text-6xl text-primary-green font-light">DRY DOG FOOD</h2>

      <!-- Sort Region Here -->
      <div class="mt-14 flex items-center">
        <BreadcrumbVue :breadcrumbs="breadcrumbs" />
        <div class="ml-auto">
          <PriceSort />
        </div>
      </div>

      <!-- Product Display -->
      <ProductDisplay :loading="loading" :products="products" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref, type Ref } from 'vue'
import { type Breadcrumb } from '@/types/global'
import { useFetchCategoryProducts } from '@/composables/useProducts'
import PriceRange from '@/widgets/Product/PriceRange.vue'
import BrandFilter from '@/widgets/Product/BrandFilter.vue'
import CategoryFilter from '@/widgets/Product/CategoryFilter.vue'
import BreadcrumbVue from '@/widgets/Global/Breadcrumb.vue'
import PriceSort from '@/widgets/Product/PriceSort.vue'
import ProductDisplay from '@/widgets/Product/ProductDisplay.vue'

const route = useRoute()
const { loading, products, fetchProductList } = useFetchCategoryProducts()

const breadcrumbs: Breadcrumb[] = [
  { title: 'Homepage', path: '/' },
  { title: 'test 2', path: 'test2' }
]

const segment: Ref<string> = ref('category')
const searchParam: Ref<string> = ref(`?${segment.value}=${route.params.uuid}`)

onMounted(() => {
  fetchProductList(searchParam.value)
})
</script>
