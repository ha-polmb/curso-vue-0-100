import { shallowMount } from "@vue/test-utils"
import PokemonPicture from "@/components/PokemonPicture.vue"


describe("PokemonPicture component", () => {
    test("match con snapshot", () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })
    
    test("se muestra la imagen oculta y pokemon 100", () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })

        const [img1, img2] = wrapper.findAll("img")
        
        expect(img1.exists()).toBeTruthy()
        expect(img2).toBe(undefined)
        expect(img1.classes("hidden-pokemon")).toBeTruthy()
        expect(img1.attributes().src).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg")
    })
    
    test("mostrar pokemon cuando showPokemon:true", () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        })

        const img1 = wrapper.findAll("img")[1]

        expect(img1.exists()).toBeTruthy()
        expect(img1.classes("hidden-pokemon")).toBe(false)
        expect(img1.classes("fade-in")).toBe(true)
    })
})