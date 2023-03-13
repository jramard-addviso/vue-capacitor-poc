import { ref } from 'vue'
import { defineStore } from 'pinia'

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches

export const useColorSchemeStore = defineStore('colorScheme', () => {
  let switched = ref(prefersDarkScheme)
  function toggle() {
    switched.value = !switched.value
  }

  return { switched, toggle }
})
