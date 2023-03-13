<script setup>
import { computed } from 'vue'

const classObject = computed(() => {
  return {
    switch: true,
    'switch--switched': props.switched
  }
})

const props = defineProps({
  switched: Boolean
})

defineEmits(['toggle'])
</script>

<template>
  <div :class="classObject" @click="$emit('toggle', $event.target.value)"></div>
</template>

<style>
:root {
  --switch-width: 4rem;
  --switch-height: 2rem;
  --switch-border-width: 0.25rem;
  --switch-bullet-width: calc(var(--switch-width) / 2 - var(--switch-border-width));
}
</style>

<style scoped>
.switch {
  position: fixed;
  right: 0;
  bottom: 2.5rem;
  transform: translateX(var(--switch-border-width));
  width: var(--switch-width);
  height: var(--switch-height);
  border: var(--switch-border-width) solid var(--border-color);
  border-right: none;
  backdrop-filter: blur(50px) grayscale(75%);
  cursor: pointer;
  z-index: 500;
}

.switch::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--switch-bullet-width);
  background-color: var(--background-color);
  transition: all 0.15s ease;
}

.switch--switched::after {
  left: calc(100% - var(--switch-border-width));
  transform: translateX(-100%);
}
</style>
