import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', () => {
  let open = ref(false)
  function close() {
    open.value = false
  }
  function toggle() {
    open.value = !open.value
  }

  return { open, close, toggle }
})
