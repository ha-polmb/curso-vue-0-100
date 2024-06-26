import { Language } from "@/interfaces/places";
import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1IjoiemVwcGVsaW4xNyIsImEiOiJjbHhwNDllNWEwbHg5MmtzZTViZmk4eHFoIn0.AVD9tDH9BJwHcN3p9PiDDA",
  },
});

export default searchApi;
