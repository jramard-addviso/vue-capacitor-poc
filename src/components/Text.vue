<script setup>
import { computed } from 'vue'

const classObject = computed(() => {
  return {
    text: true,
    'text--italic': props.italic,
    'text--center': props.center
  }
})

const props = defineProps({
  italic: Boolean,
  center: Boolean
})
</script>

<template>
  <div :class="classObject"><slot></slot></div>
</template>

<style scoped>
.text {
  font-size: 1rem;
  font-weight: 300;
  color: var(--text-color);
}

.text--italic {
  font-style: italic;
}

.text--center {
  text-align: center;
}

.text :slotted(p + p) {
  margin-top: 24px;
}

@media (min-width: 640px) {
  .text {
    font-size: 1.25rem;
  }
}
</style>
