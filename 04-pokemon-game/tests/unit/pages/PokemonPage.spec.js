import { shallowMount, mount } from "@vue/test-utils"
import PokemonPage from "@/pages/PokemonPage.vue"


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
})