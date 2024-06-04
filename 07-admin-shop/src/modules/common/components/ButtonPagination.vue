<template>
  <div class="flex justify-center py-10 bg-gray-100 space-x-3">
    <button
      class="flex items-center space-x-1.5 rounded-lg px-4 py-1.5 text-white bg-blue-500 disabled:bg-gray-300 hover:bg-blue-600 transition-all"
      :disabled="page === 1"
      @click="$router.push({ query: { page: page - 1 } })"
    >
      <arrow-left-icon />
      <span>Anteriores</span>
    </button>

    <button
      class="flex items-center space-x-1.5 rounded-lg px-4 py-1.5 text-white bg-blue-500 disabled:bg-gray-300 hover:bg-blue-600 transition-all"
      @click="$router.push({ query: { page: page + 1 } })"
      :disabled="hasMoreData"
    >
      <span>Siguientes</span>
      <arrow-right-icon />
    </button>
  </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from '@/icons/ArrowRightIcon.vue';
import ArrowLeftIcon from '@/icons/ArrowLeftIcon.vue';

interface Props {
  page: number;
  hasMoreData: boolean;
}
defineProps<Props>();
</script>
