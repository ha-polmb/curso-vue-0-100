import getPokemonOptions, { getPokemons, getPokemonNames } from "@/helpers/getPokemonOptions"


describe("getPokemonOptions helpers", () => {
    test("devuelve array de numeros", () => {
        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)
    })

    test("devuelve array de 4 elementos con nombres de pokemons", async () => {
        const pokemons = await getPokemonNames([1, 2, 3, 4])
        const matchData = [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ]
        expect(pokemons).toStrictEqual(matchData)
    })

    test("getPokemonOptions devuelve array mezclado", async () => {
        const pokemons = await getPokemonOptions()
        expect(pokemons.length).toBe(4)
        const matchData = [
            { 
                name: expect.any(String), 
                id: expect.any(Number), 
            },
            { 
                name: expect.any(String),
                id: expect.any(Number), 

            },
            { 
                name: expect.any(String),
                id: expect.any(Number), 
            },
            { 
                name: expect.any(String),
                id: expect.any(Number), 
            }
        ]
        expect(pokemons).toEqual(matchData)
    })
})