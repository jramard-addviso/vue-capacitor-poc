<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <img class="card__image" :src="imageSrc" :alt="name" />
    <h2 class="card__title">{{ name }}</h2>
    <p class="card__description">{{ description }}</p>
    <a class="card__link" :href="link">Show more &#8640;</a>
  </div>
</template>

<style>
:root {
  --card-image-size: 256px;
}
</style>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - var(--card-image-size) / 2);
  margin-top: calc(var(--card-image-size) / 2);
  padding: calc(1.5rem + var(--card-image-size) / 2) 2rem 2rem;
  border: 0.25rem solid var(--border-color);
  border-radius: 0.75rem;
  background-color: var(--background-color);
  box-shadow: 0 0 48px -24px var(--color-dark);
}

.card__image {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--card-image-size);
  height: var(--card-image-size);
}

.card__title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--title-color);
}

.card__description {
  flex-grow: 1;
  font-size: 1rem;
  font-weight: 300;
  color: var(--color-light);
}

.card__link {
  margin-top: 1.5rem;
  font-size: 1rem;
  font-weight: 300;
  color: var(--link-color);
  cursor: pointer;
  transition: color 0.15s ease;
}

.card__link:hover {
  color: var(--link-hover-color);
}
</style>
