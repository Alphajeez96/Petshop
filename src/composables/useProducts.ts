import { ref, type Ref } from 'vue'
import { type Product } from '@/types/products'
import productsApi from '@/api/productsApi'

export const useFetchCategoryProducts = () => {
  const loading: Ref<boolean> = ref(false)
  const products: Ref<Product[]> = ref([])

  async function fetchCategoryProducts(id: string) {
    try {
      loading.value = true
      const { getCategoryProducts } = productsApi()
      const response = await getCategoryProducts(id)
      const { data } = response || []

      products.value = data
    } catch {
      // No need for specific error handling in this case
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    products,
    fetchCategoryProducts
  }
}
