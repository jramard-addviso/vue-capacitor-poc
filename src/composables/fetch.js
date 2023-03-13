import { ref, unref } from 'vue'

export function useFetch(url) {
  const loading = ref(false)
  const error = ref(null)
  const data = ref(null)

  async function fetchData() {
    loading.value = true
    error.value = null
    data.value = null
    try {
      const res = await fetch(unref(url))
      data.value = await res.json()
    } catch (e) {
      error.value = 'API not found...'
    }
    loading.value = false
  }

  return { loading, error, data, fetchData }
}
