<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toggleSideMenu"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="sideMenuOpen"
      show-if-above
      bordered
      @click="toggleSideMenu"
      ><!-- ESTO BIEN O MAL ??  el @click de q-drawer-->
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { linksList } from "src/router/link-list";

defineOptions({
  name: "MainLayout",
});

const store = useStore();

const sideMenuOpen = computed(() => store.getters["ui/isSideMenuOpen"]);
const toggleSideMenu = () => {
  store.commit("ui/toggleSideMenu");
};
</script>
