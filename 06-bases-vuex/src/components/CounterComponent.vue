<template>
    <div>
        <h1>Counter -Vuex</h1>
        <h2>Direct access: {{ $store.state.count }}</h2>
        <h2>Computed: {{ countComputed }}</h2>
        <h2>MapState: {{ count }}</h2>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        countComputed() {
            return this.$store.state.count
        },
        ...mapState(['count'])
    }
}
</script>
