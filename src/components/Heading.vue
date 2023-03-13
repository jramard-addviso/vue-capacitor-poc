<script setup></script>

<template>
  <h1 class="heading"><slot></slot></h1>
</template>

<style scoped>
.heading {
  margin-bottom: 4rem;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  text-shadow: var(--title-shadow);
  color: var(--title-color);
}

@media (min-width: 640px) {
  .heading {
    margin-bottom: 5rem;
    font-size: 4rem;
  }
}
</style>
