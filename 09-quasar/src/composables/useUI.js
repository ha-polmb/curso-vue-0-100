import { useStore } from "vuex";
import { computed } from "vue";


export const useUI = () => {

    const store = useStore()

    return {

        // side menu options
        sideMenuOpen: computed(() => store.getters["ui/isSideMenuOpen"]),
        toggleSideMenu: () => store.commit("ui/toggleSideMenu")
    }
}