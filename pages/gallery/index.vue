<script setup lang="ts">
import GalleryItem from "~/components/GalleryItem.vue";
const { data } = useApi<Project[]>("/projects");

import { useGridStore } from "~/stores/gridStore";
import { storeToRefs } from "pinia";
import type {Project} from "~/types/projects";

const { columns } = storeToRefs(useGridStore());
const { setColumns, resetColumns } = useGridStore();

</script>

<template>
  <div>gallery
    <button @click="resetColumns()">3</button>
    <button @click="setColumns(4)">4</button>
    <button @click="setColumns(5)">5</button>
  </div>
  <div v-if="data && data.length" class="grid-base" :class="`grid-${columns}`">
  <div v-for="item in data" :key="item.id">
    <gallery-item :title="item.title" :description="item.description" :id="item.id" />
  </div>
  </div>
</template>

<style scoped>
.grid-base {
  display: grid;
  grid-auto-rows: 1fr;
}

.grid-3 {
  grid-template-columns: 1fr 1fr 1fr;
}

.grid-4 {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.grid-5 {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

@media (max-width:768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

</style>