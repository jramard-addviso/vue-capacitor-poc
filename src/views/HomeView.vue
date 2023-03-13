<script setup>
import { getImagePath } from '@/utils/paths'

import { data as pokemonList } from '@/data/pokemon-list.json'

import Card from '@/components/Card.vue'
import Heading from '@/components/Heading.vue'
import Slider from '@/components/Slider.vue'
import SliderSlide from '@/components/SliderSlide.vue'
</script>

<template>
  <main class="main">
    <div class="container">
      <Heading>Home</Heading>
      <Slider>
        <SliderSlide v-for="pokemon in pokemonList">
          <Card
            :name="pokemon.name"
            :description="pokemon.description"
            :image-src="getImagePath(pokemon.image)"
            :link="pokemon.link"
          ></Card>
        </SliderSlide>
      </Slider>
    </div>
  </main>
</template>

<style scoped></style>
