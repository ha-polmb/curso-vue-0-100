import pokemonApi from "@/api/pokemonApi"


describe("pokemonApi", () => {
    test("axios configurado con API de pokemon", () => {
        expect(pokemonApi.defaults.baseURL).toBe("https://pokeapi.co/api/v2/pokemon")
    })
})