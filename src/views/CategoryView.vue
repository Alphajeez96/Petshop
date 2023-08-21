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
        <BreadcrumbVue :breadcrumbs="path" />
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
import { onMounted, ref } from 'vue'
import { type Breadcrumb } from '@/types/global'
import PriceRange from '@/widgets/Product/PriceRange.vue'
import BrandFilter from '@/widgets/Product/BrandFilter.vue'
import CategoryFilter from '@/widgets/Product/CategoryFilter.vue'
import BreadcrumbVue from '@/widgets/Global/Breadcrumb.vue'
import PriceSort from '@/widgets/Product/PriceSort.vue'
import ProductDisplay from '@/widgets/Product/ProductDisplay.vue'
import { useFetchCategoryProducts } from '@/composables/useProducts'
import { useRoute } from 'vue-router'
import router from '@/router'

const { loading, products, fetchProductList } = useFetchCategoryProducts()

const route = useRoute()
const segment = ref('category')
const price = ref(0)
const page = ref(1)
const limit = ref(15)
const sort = ref(false)

const searchParam = ref(`?type=${segment.value}=${route.params.uuid}`)

// let searchParam = ref(
//   `?${segment.value}=${route?.params?.uuid}&price=${price.value}&page=${page.value}&limit=${limit.value}&desc=${sort.value}`
// )

onMounted(() => {
  fetchProductList(searchParam.value)
  //   router.push(`/shop/${searchParam.value}`)
})

console.log('PRD:::', products)

// ?category=f4f399c0-db91-3c96-88e2-0bfce3fe06a8&price=0&page=1&limit=15&sortBy=&desc=false

console.log('ROUTE:::', route)

const handleRequest = (param: string) => {
  searchParam.value = `${searchParam.value}${param}`
}

const path: Breadcrumb[] = [
  { title: 'Homepage', path: '/' },
  { title: 'test 2', path: 'test2' }
]
</script>
