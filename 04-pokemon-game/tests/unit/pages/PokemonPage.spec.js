import { shallowMount, mount } from "@vue/test-utils"
import PokemonPage from "@/pages/PokemonPage.vue"
import { pokemons } from "../mocks/pokemons.mock"


describe("PokemonPage component", () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test("debe llamar mixPokemonArray en mount", () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, "mixPokemonArray")
        const wrapper = shallowMount(PokemonPage)
        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })

    test("match con snapshot cuando cargan pokemons", () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ""
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })

    test("se muestran los componentes PokemonPicture y PokemonOptions", () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ""
                }
            }
        })
        const picture = wrapper.find("pokemon-picture-stub")
        const options = wrapper.find("pokemon-options-stub")
        expect(picture.exists()).toBeTruthy()
        expect(options.exists()).toBeTruthy()
        expect(picture.attributes("pokemonid")).toBe("1")
        expect(options.attributes("pokemons")).toBeTruthy()
    })

    test("pruebas con checkAnswer", async () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ""
                }
            }
        })

        await wrapper.vm.checkAnswer(1)
        expect(wrapper.find("h2").exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.find("h2").text()).toBe(`Correcto! ${pokemons[0].name}`)

        await wrapper.vm.checkAnswer(10)
        expect(wrapper.vm.message).toBe(`Oops, era ${pokemons[0].name}`)
    })
})