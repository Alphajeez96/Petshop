<template>
  <div class="w-1/2 mx-auto relative">
    <TextInput
      id="search-input"
      type="text"
      placeholder="Search products"
      v-model="searchQuery"
      hasIcon
    >
      <template #icon>
        <IconSearch />
      </template>
    </TextInput>

    <!-- Dropdown -->
    <div class="absolute w-full -bottom-10 left-3" v-if="searchQuery">
      <Dropdown :isVisible="!!products.length">
        <ul>
          <li v-for="product in products" :key="product?.uuid" @click="handleRoute(product?.uuid)">
            {{ product?.title }}
          </li>
        </ul>
      </Dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import { debounce } from '@/utils/global'
import { useRouter } from 'vue-router'
import { useFetchCategoryProducts } from '@/composables/useProducts'
import TextInput from '@/components/TextInput/index.vue'
import IconSearch from '@/components/Icons/IconSearch.vue'
import Dropdown from '@/widgets/Global/Dropdown.vue'

const router = useRouter()
const { products, fetchProductList } = useFetchCategoryProducts()

const searchQuery: Ref<string> = ref('')

watch(searchQuery, () => {
  searchResult()
})

const searchResult = debounce(() => {
  fetchProductList(`?title=${searchQuery.value}`)
}, 300)

const handleRoute = (uuid: string) => {
  searchQuery.value = ''
  router.push(`/products/${uuid}`)
}
</script>

<style scoped>
li {
  @apply p-2.5 cursor-pointer rounded-sm hover:bg-gray-100 text-sm;
}
</style>
