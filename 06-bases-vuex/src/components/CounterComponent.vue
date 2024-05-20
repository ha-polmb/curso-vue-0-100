<template>
    <div>
        <h1>Counter -Vuex</h1>
        <h2>Direct access: {{ $store.state.count }}</h2>
        <h2>Computed: {{ countComputed }}</h2>
        
        <button @click="increment">+1</button>
        <button @click="incrementBy">+5</button>
        <button @click="incrementRandomInt" :disabled="isLoading">+random</button>

        <h2>MapState: {{ count }}</h2>
        <h2>Last mutation: {{ lastMutation }}</h2>
        <h2>Direct getter: {{ $store.getters.squareCount }}</h2>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        countComputed() {
            return this.$store.state.count
        },
        ...mapState(['count', 'lastMutation', 'isLoading'])
    },
    methods: {
        increment() {
            this.$store.commit('increment')
        },
        incrementBy() {
            this.$store.commit('incrementBy', 5)
        },
        ...mapActions(['incrementRandomInt'])
    }
}
</script>
