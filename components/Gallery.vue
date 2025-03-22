<script setup>

</script>
<template>
  
</template>
<!--
<script setup lang="ts">
import GalleryItemTile from "~/components/GalleryItemTile.vue";
import {useGridStore} from "~/stores/useGridStore";
import type {Project} from "~/types/projects";
import {toNumberSafe} from "~/utils/utils";

const gridStore = useGridStore();
const {data} = useApi<Project[]>("/projects");
const route = useRoute()

gridStore.setGalleryColumns(toNumberSafe(route.query?.grid, 3))
</script>

<template>
  <div v-if="gridStore.isGalleryViewGrid">
    <div v-if="data?.length" class="grid-base" :class="`grid-${gridStore.columns}`">
      <div v-for="item in data" :key="item.id">
        <gallery-item-tile :title="item.title" :description="item.description" :id="item.id"/>
      </div>
    </div>
  </div>
  <div v-if="!gridStore.isGalleryViewGrid">
    <div v-for="item in data" :key="item.id">
      <gallery-item-row :title="item.title" :description="item.description" :id="item.id"/>
    </div>
  </div>
</template>

<style scoped>
.grid-base {
  display: grid;
  grid-auto-rows: 1fr;
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

.grid-5 {
  grid-template-columns: repeat(5, 1fr);
}

.btn {
  background: #333333;
  color: #fff;
  border: none;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
}

</style>
-->
