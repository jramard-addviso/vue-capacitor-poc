<script setup>
import { computed } from 'vue'
import { useRouter, RouterLink, RouterView, isNavigationFailure } from 'vue-router'

import { useColorSchemeStore } from '@/stores/colorScheme'
import { useHeaderStore } from '@/stores/header'

import Header from '@/components/Header.vue'
import Switch from '@/components/Switch.vue'

const router = useRouter()
const colorSchemeStore = useColorSchemeStore()
const headerStore = useHeaderStore()

router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) {
    return
  }
  headerStore.close()
})

const classObject = computed(() => {
  return {
    app: true,
    'app--light': !schemeSwitched.value,
    'app--dark': schemeSwitched.value
  }
})

const schemeSwitched = computed(() => {
  return colorSchemeStore.switched
})
const headerOpen = computed(() => {
  return headerStore.open
})

const toggleScheme = () => {
  colorSchemeStore.toggle()
}
const headerToggle = () => {
  headerStore.toggle()
}
</script>

<template>
  <div :class="classObject">
    <Header :open="headerOpen" @toggle="headerToggle()">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/search">Search</RouterLink>
      <RouterLink to="/list">List</RouterLink>
      <RouterLink to="/search-api">Search (API)</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </Header>

    <Switch :switched="schemeSwitched" @toggle="toggleScheme()"></Switch>

    <RouterView v-slot="{ Component }">
      <Transition name="fade-slide">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style></style>
