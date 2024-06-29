import axios from "axios"

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1IjoiemVwcGVsaW4xNyIsImEiOiJjbHhwNDllNWEwbHg5MmtzZTViZmk4eHFoIn0.AVD9tDH9BJwHcN3p9PiDDA",
  },
})

export default directionsApi
