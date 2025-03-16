<script setup lang="ts">
import GalleryItem from "~/components/GalleryItem.vue";
const { data } = useApi<Project[]>("/projects");

import { useGridStore } from "~/stores/gridStore";
import { storeToRefs } from "pinia";
import type {Project} from "~/types/projects";

const { columns } = storeToRefs(useGridStore());
const { setColumns, resetColumns } = useGridStore();
onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
})

let isGridSelectVisible = true;
updateWidth()

function updateWidth(): void {
  const breakpoint = 768;

  if(window.innerWidth < breakpoint && isGridSelectVisible) {
    isGridSelectVisible = false;
    setColumns(1);
  } else if (window.innerWidth > breakpoint && !isGridSelectVisible) {
    resetColumns();
    isGridSelectVisible = true;
  }
}
</script>


<template>
  <div v-if="isGridSelectVisible">
    <button class="btn" @click="resetColumns()">3</button>
    <button class="btn" @click="setColumns(4)">4</button>
    <button class="btn" @click="setColumns(5)">5</button>
  </div>
  <div v-if="data?.length" class="grid-base" :class="`grid-${columns}`">
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
  margin:10px;
  padding: 10px;
  cursor: pointer;
}

</style>