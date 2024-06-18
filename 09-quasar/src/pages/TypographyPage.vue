<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>

    <q-separator />

    <span class="text-subtitle">Subtitle 1</span>
    <span class="text-subtitle">Subtitle 2</span>

    <q-separator />

    <p class="text-body1">Lorem ipsum</p>
    <p class="text-body2">Lorem ipsum</p>

    <q-separator />

    <q-btn color="primary" label="Abrir menú lateral" class="q-mt-md" />
  </q-page>
</template>

<script setup>
defineOptions({
  name: "TypographyPage",
});
</script>
