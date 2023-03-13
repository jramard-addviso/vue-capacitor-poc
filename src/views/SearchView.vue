<script setup>
import { ref, computed } from 'vue'

import { getImagePath } from '@/utils/paths'

import { data as pokemonList } from '@/data/pokemon-list.json'

import Card from '@/components/Card.vue'
import Heading from '@/components/Heading.vue'
import SearchInput from '@/components/SearchInput.vue'
import Slider from '@/components/Slider.vue'
import SliderSlide from '@/components/SliderSlide.vue'
import Text from '@/components/Text.vue'

let pokemonInput = ref('')

const pokemonResults = computed(() => {
  return (
    (pokemonInput.value &&
      pokemonList.filter((item) =>
        item.name.toLowerCase().startsWith(pokemonInput.value.toLowerCase())
      )) ||
    []
  )
})
</script>

<template>
  <main class="main">
    <div class="container">
      <Heading>Search</Heading>
      <form class="search-form" @submit.prevent>
        <SearchInput
          placeholder="Type in your favorite Pokémon"
          v-model="pokemonInput"
        ></SearchInput>
      </form>
      <div class="search-result" v-show="pokemonResults.length > 0">
        <Slider :options="{ observer: true }">
          <SliderSlide v-for="pokemon in pokemonResults">
            <Card
              :name="pokemon.name"
              :description="pokemon.description"
              :image-src="getImagePath(pokemon.image)"
              :link="pokemon.link"
            ></Card>
          </SliderSlide>
        </Slider>
      </div>
      <div class="search-result" v-show="pokemonInput && pokemonResults.length === 0">
        <Text center>
          <p>
            Oh no, there is no such Pokémon in our base, please contact the technical department.
          </p>
        </Text>
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
