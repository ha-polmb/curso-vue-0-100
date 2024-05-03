import { shallowMount } from "@vue/test-utils"
import Indecision from "@/components/Indecision.vue"

describe("Indecision component", () => {
    let wrapper
    let clgSpy

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: "yes",
            forced: false,
            image: "https://yesno.wtf/assets/yes/3-422e51268d64d78241720a7de52fe121.gif"
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, "log")
        
        jest.clearAllMocks()
    })

    test("Debe hacer match con el snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test("Escribir en el input no dispara nada (console.log)", async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer")

        const input = wrapper.find("input")
        await input.setValue("Hola Mundo")

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).not.toHaveBeenCalled()

    })
    
    test("Escribir interrogación dispara getAnswer", async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer")

        const input = wrapper.find("input")
        await input.setValue("?")

        expect(getAnswerSpy).toHaveBeenCalled()
    })
    
    test("Pruebas en getAnswer", async () => {
        await wrapper.vm.getAnswer()
        const img = wrapper.find("img")
        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe("https://yesno.wtf/assets/yes/3-422e51268d64d78241720a7de52fe121.gif")
        expect(wrapper.vm.answer).toBe("Sí")
    })
    
    test("pruebas en getAnswer - Fallo en API", async () => {
        fetch.mockImplementationOnce(() => Promise.reject("API is down"))
        await wrapper.vm.getAnswer()
        
        const img = wrapper.find("img")
        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe("No se pudo cargar del API")
    })
      
})