<script setup>
import {useGridStore} from "~/stores/gridStore";
import {useControlPanelStore} from "~/stores/controlPanel.js";

const {setColumns, setGalleryListView, resetColumns, showGridPanel, hideGridPanel} = useGridStore();
const {isControlPanelMinimized} = storeToRefs(useControlPanelStore());
onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
})

let isGridSelectVisible = true;
updateWidth()

function updateWidth() {
  const breakpoint = 768;

  if (window.innerWidth < breakpoint && isGridSelectVisible) {
    isGridSelectVisible = false;
    hideGridPanel();
    setColumns(1);
  } else if (window.innerWidth > breakpoint && !isGridSelectVisible) {
    resetColumns();
    isGridSelectVisible = true;
    showGridPanel();
  }
}
</script>

<template>
  <div class="panel" :class="isControlPanelMinimized ? 'minimize' : ''">
    <nav class="nav-bar">
      <span class="logo">
      <NuxtLink to="/"></NuxtLink>
      </span>
      <span>
      <NuxtLink to="/info">Info</NuxtLink>
      </span>

      <span>
      <button class="btn-nav" @click="setColumns(3)">3</button>
      <button class="btn-nav" @click="setColumns(4)">4</button>
      <button class="btn-nav" @click="setColumns(5)">5</button>
      <button class="btn-nav" @click="setGalleryListView()">List</button>
      </span>
    </nav>
  </div>

</template>

<style scoped>
.logo {
  background: #2c3e50;
  width: 40px;
  height: 40px;
  border-radius: 40px;
}

.panel {
  z-index: 10000;
  width: 40vw;
  background: white;
  position: fixed;
  top: 50px;
  left: 50%;
  heigth: 50px;
  transform: translateX(-50%);
  padding: 8px;
  border-radius: 60px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
  transition: width 1s;
}

.minimize {
  width: 40px !important;
  transition: width 1s;
}

.btn-nav {
  padding: 10px;
  margin: 2px;
}

.nav-bar {
  display: flex;
  color: #2c3e50;
  justify-content: space-between;
  align-items: center;
  width: 38vw;
  white-space: nowrap;
}
</style>
