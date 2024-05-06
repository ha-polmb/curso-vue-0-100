<template>
  <div>
    <div v-if="!pokemon">
      <h1>Un momento...</h1>
    </div>
    <div v-else>
      <h1>¿Qué Pokémon es?</h1>
  
      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
      <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" />

      <template v-if="showAnswer">
        <h2 class="fade-in">{{ message }}</h2>
        <button @click="newGame">Nuevo juego</button>
      </template>
    </div>

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
        pokemon: null,
        showPokemon: false,
        showAnswer: false,
        message: ""
      }
    },
    methods: {
      async mixPokemonArray() {
        this.pokemonArr = await getPokemonOptions()
        const rndInt = Math.floor(Math.random() * 4)
        this.pokemon = this.pokemonArr[rndInt]
      },
      checkAnswer(selectedId) {
        this.showPokemon = true
        this.showAnswer = true

        if (selectedId === this.pokemon.id) {
          this.message = `Correcto! ${this.pokemon.name}`
        } else {
          this.message = `Oops, era ${this.pokemon.name}`
        }
      },
      newGame() {
        this.showPokemon = false
        this.showAnswer = false
        this.pokemonArr = []
        this.pokemon = null
        this.mixPokemonArray()
      },
    },
    mounted() {
      this.mixPokemonArray()
    },
}
</script>