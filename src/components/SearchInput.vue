<script setup>
import { ref } from 'vue'

let inputRef = ref(null)

defineProps({
  placeholder: String,
  modelValue: String
})

defineEmits(['update:modelValue', 'submit'])
</script>

<template>
  <div class="search-input">
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup.enter="$emit('submit', inputRef.value)"
      ref="inputRef"
    />
    <button class="submit" type="button" @click="$emit('submit', inputRef.value)"></button>
  </div>
</template>

<style scoped>
.search-input {
  display: flex;
  box-shadow: 0 0 24px -12px var(--color-dark);
}

.search-input .input {
  flex-grow: 1;
  min-width: 0;
  padding: 1rem 1.5rem;
  border: 0.25rem solid var(--border-color);
  border-right: none;
  border-radius: 0.75rem 0 0 0.75rem;
  outline: none;
  background-color: var(--background-color);
  font-family: inherit;
  font-size: inherit;
  font-weight: 300;
  color: var(--color-light);
}

.search-input .input::placeholder {
  color: inherit;
  opacity: 1;
}

.search-input .input:focus-visible::placeholder {
  opacity: 0;
}

.search-input .submit {
  flex-shrink: 0;
  width: 4rem;
  border: 0.25rem solid var(--border-color);
  border-radius: 0 0.75rem 0.75rem 0;
  outline: none;
  background-color: var(--background-color);
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.search-input .submit::after {
  content: '';
  display: inline-flex;
  width: 1.5rem;
  height: 1.5rem;
  background-image: url('@/assets/icons/search.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.search-input .submit:hover,
.search-input .submit:focus-visible {
  background-color: var(--background-hover-color);
}
</style>
