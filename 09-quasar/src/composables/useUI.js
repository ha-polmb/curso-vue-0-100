import { useStore } from "vuex";
import { computed } from "vue";

export const useUI = () => {
  const store = useStore();

  return {
    // side menu options
    // sideMenuOpen: computed(() => store.getters["ui/isSideMenuOpen"]),
    sideMenuOpen: computed({
      get() {
        return store.getters["ui/isSideMenuOpen"];
      },
      set(val) {
        store.commit("ui/toggleSideMenu");
      },
    }),
    toggleSideMenu: () => store.commit("ui/toggleSideMenu"),
  };
};
