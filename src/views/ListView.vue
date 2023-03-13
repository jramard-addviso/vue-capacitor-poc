<script setup>
import { useFetch } from '@/composables/fetch'

import Heading from '@/components/Heading.vue'
import ListItem from '@/components/ListItem.vue'
import Text from '@/components/Text.vue'

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151'

const { loading, error, data: pokemonData, fetchData: fetchPokemonData } = useFetch(url)

fetchPokemonData()
</script>

<template>
  <main class="main">
    <div class="container">
      <Heading>List</Heading>
      <Text center v-if="loading"><p>Loading...</p></Text>
      <Text center v-else-if="error">
        <p>Oops! Error encountered: {{ error }}</p>
      </Text>
      <div class="list-grid" v-else-if="pokemonData.results && pokemonData.results.length > 0">
        <ListItem :name="pokemon.name" v-for="pokemon in pokemonData.results"></ListItem>
      </div>
    </div>
  </main>
</template>

<style scoped>
.list-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
