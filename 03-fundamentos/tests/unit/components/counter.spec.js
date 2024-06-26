import { shallowMount } from "@vue/test-utils"
import Counter from "@/components/Counter"

describe("Counter Component", () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })
    // test("debe de hacer match con el snapshot", () => {
    //     const wrapper = shallowMount(Counter)
    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    test("h2 debe de terner el valor por defecto 'Counter'", () => {
        expect(wrapper.find("h2").exists()).toBeTruthy()
        const h2Value = wrapper.find("h2").text()
        expect(h2Value).toBe("Counter")
    })

    test("el valor por defecto debe de ser 100 en el p", () => {
        const pVal = wrapper.find("[data-testid='counter']").text()
        expect(pVal).toBe("101")
    })

    test("debe increm. y decrem. en 1 el valor del contador", async () => {
        const [increaseBtn, decreaseBtn] = wrapper.findAll("button")
        await increaseBtn.trigger("click")
        await decreaseBtn.trigger("click")
        await decreaseBtn.trigger("click")
        const pVal = wrapper.find("[data-testid='counter']").text()
        expect(pVal).toBe("100")
    })

    test("debe de establecer el valor por defecto", () => {
        const { start } = wrapper.props()
        const value = wrapper.find("[data-testid='counter']").text()
        expect(Number(value)).toBe(start)
    })

    test("debe de mostrar la prop title", () => {
        const title = "Hola mundo"
        const wrapper = shallowMount(Counter, {
            props: {
                title
            }
        })

        expect(wrapper.find("h2").text()).toBe(title)
    })
})