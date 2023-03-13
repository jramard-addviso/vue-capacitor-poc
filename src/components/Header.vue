<script setup>
import { computed } from 'vue'

const classObject = computed(() => {
  return {
    header: true,
    'header--open': props.open
  }
})

const props = defineProps({
  open: Boolean
})

defineEmits(['toggle'])
</script>

<template>
  <header :class="classObject">
    <button class="burger" @click="$emit('toggle', $event.target.value)"></button>
    <div class="header__panel">
      <nav class="header__nav"><slot></slot></nav>
    </div>
  </header>
</template>

<style>
:root {
  --header-spacer: 2.5rem;
  --header-burger-size: 5rem;
}
</style>

<style scoped>
.header {
  position: relative;
  z-index: 1000;
}

.header .burger {
  position: fixed;
  top: var(--header-spacer);
  left: 0;
  width: var(--header-burger-size);
  height: var(--header-burger-size);
  border: 0.25rem solid var(--border-color);
  border-left: none;
  border-radius: 0 0.75rem 0.75rem 0;
  outline: none;
  background-color: var(--background-color);
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.15s ease;
}

.header .burger::after {
  content: '';
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  background-image: url('@/assets/icons/angle.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.25s ease-in-out;
}

.header .burger:hover,
.header .burger:focus-visible {
  background-color: var(--background-hover-color);
}

.header__panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: calc(var(--header-burger-size) + var(--header-spacer) * 2);
  bottom: var(--header-spacer);
  left: 0;
  transform: translateX(-100%);
  width: max-content;
  max-width: calc(100% - 1rem);
  padding: 2rem;
  border: 0.25rem solid var(--border-color);
  border-left: none;
  border-radius: 0 0.75rem 0.75rem 0;
  backdrop-filter: blur(50px) grayscale(75%);
  overflow: hidden;
  transition: transform 0.25s ease-in-out;
}

.header__nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.header__nav :slotted(a) {
  font-size: 3rem;
  font-weight: 600;
  color: var(--title-color);
  transition: text-shadow 0.15s ease;
}

.header__nav :slotted(a):hover,
.header__nav :slotted(a):focus-visible,
.header__nav :slotted(a.router-link-exact-active) {
  text-shadow: var(--title-shadow);
}

.header--open .burger::after {
  transform: rotate(180deg);
}

.header--open .header__panel {
  transform: translateX(0);
}
</style>
