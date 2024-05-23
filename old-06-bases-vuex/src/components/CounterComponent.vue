<template>
    <div>
        <h1>Counter -Vuex</h1>
        <h2>Direct access: {{ $store.state.counter.count }}</h2>
        <h2>Computed: {{ countComputed }}</h2>
        
        <button @click="increment">+1</button>
        <button @click="incrementBy">+5</button>
        <button @click="incrementRandomInt" :disabled="isLoading">+random</button>

        <h2>MapState: {{ count }}</h2>
        <h2>Last mutation: {{ lastMutation }}</h2>
        <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        ...mapState('counter', ['count', 'lastMutation', 'isLoading'])
    },
    methods: {
        increment() {
            this.$store.commit('counter/increment')
        },
        incrementBy() {
            this.$store.commit('counter/incrementBy', 5)
        },
        ...mapActions('counter', ['incrementRandomInt'])
    }
}
</script>
