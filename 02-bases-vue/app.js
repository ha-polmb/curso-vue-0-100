
const app = Vue.createApp({
    template: `
    <h1>Hola mundo</h1>
    <p>{{message}}</p>

    <button @click="capitalize">Change message</button>
    `,
    data() {
        return {
            message: "Hola mundo"
        }
    },

    methods: {
        changeMessage(event) {
            console.log(event);
            this.message = "Modificado!"
        },
        capitalize() {
            this.message = this.message.toUpperCase()
        }
    }
})

app.mount("#myApp")