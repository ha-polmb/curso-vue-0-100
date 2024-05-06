<template>
  <div>
    <h1>¿Qué Pokémon es?</h1>

    <PokemonPicture :pokemonId="6" :showPokemon="true" />
    <PokemonOptions :pokemons="pokemonArr" />

  </div>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import getPokemonOptions from '../helpers/getPokemonOptions.js'

export default {
    components: {
        PokemonOptions,
        PokemonPicture
    },
    data() {
      return {
        pokemonArr: [],
      }
    },
    methods: {
      async mixPokemonArray() {
        this.pokemonArr = await getPokemonOptions()
      },
    },
    mounted() {
      this.mixPokemonArray()
    },
}
</script>