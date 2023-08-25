import { ref, type Ref } from 'vue'
import { type Product } from '@/types/products'
import productsApi from '@/api/productsApi'

export const useFetchCategoryProducts = () => {
  const loading: Ref<boolean> = ref(false)
  const products: Ref<Product[]> = ref([])

  const fetchProductList = async (id: string) => {
    try {
      loading.value = true
      const { getProductList } = productsApi()
      const response = await getProductList(id)
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
    fetchProductList
  }
}
