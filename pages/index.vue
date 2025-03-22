<script setup lang="ts">
import GalleryItemTile from "~/components/GalleryItemTile.vue";
import {useGridStore} from "~/stores/useGridStore";
import type {Project} from "~/types/projects";
import {toNumberSafe} from "~/utils/utils";
import GalleryDetailView from "~/components/GalleryDetailView.vue";

const gridStore = useGridStore();
const {data} = useApi<Project[]>("/projects");
const route = useRoute()

let cur = ref(1);
let isOpen = ref(false)

function closeModal() {
  console.log('Das Child hat das Event ausgelöst!')
  isOpen.value = false;
}

const openGalleryDetailView = (id: number) => {
  cur.value = id
  isOpen.value = true;
  console.log("openGalleryDetailView", id);
}

gridStore.setGalleryColumns(toNumberSafe(route.query?.grid, 3))

const getPosition = (id: number) => {
  let elId = `item-${id}`
  console.log('id', elId)
  let elem = document.getElementById(elId);
  console.log(elem)

  if (elem) {
    console.log(elem.getBoundingClientRect())
  }
  /*
   let rec = elem.getBoundingClientRect();
     console.log('Top:', rect.top)
     console.log('Left:', rect.left)
     console.log('Breite:', rect.width)
     console.log('Höhe:', rect.height)
   }*/
  return {
    top: 1,
    left: 2,
    right: 3,
    bottom: 4
  }
}

</script>

<template>
  <div v-if="gridStore.isGalleryViewGrid">
    <div v-if="data?.length" class="grid-base" :class="`grid-${gridStore.columns}`">
      <div class="item" v-for="item in data" :key="item.id">
        <div :id="`item-${item.id}`">
          <gallery-item-tile
            @click="openGalleryDetailView(item.id)"
            :title="item.title"
            :description="item.description"
            :id="item.id"
            :position="getPosition(item.id)"
          />
        </div>
        <div v-if="item.id === cur && isOpen">
          <gallery-detail-view
            @someEvent="closeModal"
            :title="item.title"
          />
        </div>

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
.item {
  border: 1px solid #ff0000;
}

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
