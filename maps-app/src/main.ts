import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import mapboxgl from "mapbox-gl" // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoiemVwcGVsaW4xNyIsImEiOiJjbHhwNDllNWEwbHg5MmtzZTViZmk4eHFoIn0.AVD9tDH9BJwHcN3p9PiDDA"

if (!navigator.geolocation) {
  alert("Tu navegador no soporta geolocation")
  throw new Error("Tu navegador no soporta geolocation")
}

createApp(App).use(store).use(router).mount("#app")
