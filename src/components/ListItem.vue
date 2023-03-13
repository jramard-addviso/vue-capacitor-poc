<script setup>
defineProps({
  id: {
    type: Number,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: false
  },
  additionalInfo: {
    type: Array,
    required: false,
    default() {
      return []
    }
  }
})
</script>

<template>
  <div class="list-item">
    <img class="list-item__image" :src="imageSrc" :alt="name" v-if="imageSrc" />
    <span class="list-item__number" v-if="id">#{{ id }}</span>
    <h2 class="list-item__name">{{ name }}</h2>
    <ul class="list-item__infos" v-if="additionalInfo.length > 0">
      <li v-for="info in additionalInfo">{{ info }}</li>
    </ul>
  </div>
</template>

<style>
:root {
  --list-item-image-size: 96px;
}
</style>

<style scoped>
.list-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;
  border: 0.25rem solid var(--border-color);
  border-radius: 0.75rem;
  background-color: var(--background-color);
  box-shadow: 0 0 48px -24px var(--color-dark);
}

.list-item__image {
  width: var(--list-item-image-size);
  height: var(--list-item-image-size);
  margin-bottom: 1rem;
}
.list-item__number {
  font-weight: 300;
  color: var(--color-light);
}

.list-item__name {
  font-size: 2rem;
  font-weight: 600;
  color: var(--title-color);
}

.list-item__name::first-letter {
  text-transform: uppercase;
}

.list-item__infos {
  font-size: 1.125rem;
  font-style: italic;
  text-align: center;
  color: var(--color-light);
}
</style>
