import FabButton from '@/modules/common/components/FabButton.vue';
import { shallowMount } from '@vue/test-utils'

describe('<FabButton />', () => {
    test('renders with default position', () => {
        const wrapper = shallowMount(FabButton);

        expect(wrapper.props().position).toBe('bottom-right');
        const buttonClasses = wrapper.find('button').classes();
        const classesToHave = ['btn', 'btn-circle', 'btn-secondary', 'fixed', 'bottom-right']
        expect(buttonClasses).toEqual(classesToHave)
    });

    test('renders with top-left position', () => {
        const wrapper = shallowMount(FabButton, {
            props: {
                position: 'top-left'
            }
        });

        const button = wrapper.find('button');

        expect(button.classes()).toContain('top-left');
    })
})