<script setup>
import { ref, computed, watchEffect } from 'vue'
import { round } from 'lodash'

import { useFetch } from '@/composables/fetch'

import Heading from '@/components/Heading.vue'
import ListItem from '@/components/ListItem.vue'
import SearchInput from '@/components/SearchInput.vue'
import Text from '@/components/Text.vue'

let pokemonInput = ref('')
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
const url = computed(() => baseUrl + pokemonInput.value.toLowerCase())

const { loading, error, data: pokemonData, fetchData: fetchPokemonData } = useFetch(url)

watchEffect(() => {
  if (pokemonInput.value) {
    fetchPokemonData()
  }
})
</script>

<template>
  <main class="main">
    <div class="container">
      <Heading>Search (API)</Heading>
      <form class="search-form" @submit.prevent>
        <SearchInput
          placeholder="Type in your favorite Pokémon"
          @submit="(value) => (pokemonInput = value)"
        ></SearchInput>
      </form>
      <div class="search-result" v-if="loading">
        <Text center><p>Loading...</p></Text>
      </div>
      <div class="search-result" v-else-if="error">
        <Text center>
          <p>
            Oh no, there is no such Pokémon in our base, please contact the technical department.
          </p>
        </Text>
      </div>
      <div class="search-result" v-else-if="pokemonData">
        <ListItem
          :id="pokemonData.id"
          :name="pokemonData.name"
          :image-src="pokemonData.sprites.front_default"
          :additional-info="[
            `${round(pokemonData.height * 0.1, 2)} m`,
            `${round(pokemonData.weight * 0.1, 2)} kg`
          ]"
        ></ListItem>
      </div>
    </div>
  </main>
</template>

<style scoped>
.search-form {
  max-width: 30rem;
  margin: 0 auto;
}

.search-result {
  margin-top: 5rem;
}
</style>
