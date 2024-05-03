<template>
  <div>
    <h1>¿Qué Pokémon es?</h1>

    <PokemonPicture />
    <PokemonOptions />

    <!-- TODO opciones -->
  </div>
</template>

<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'

export default {
    components: {
        PokemonOptions,
        PokemonPicture
    }
}
</script>