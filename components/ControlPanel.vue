<script setup>
import {useGridStore} from "~/stores/gridStore";
import {storeToRefs} from "pinia";

const {columns} = storeToRefs(useGridStore());
const {setColumns, setGalleryListView, resetColumns, showGridPanel, hideGridPanel} = useGridStore();

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
  <div class="panel">
    <nav class="nav-bar">
      <span>
      <NuxtLink to="/">H</NuxtLink>
      <NuxtLink to="/info">Info</NuxtLink>
        </span>
      <span>
      <button class="btn-nav" @click="setColumns(3)">3</button>
      <button class="btn-nav" @click="setColumns(4)">4</button>
      <button class="btn-nav" @click="setColumns(5)">5</button>
        </span>
      <button class="btn-nav" @click="setGalleryListView()">
        List
      </button>
    </nav>
  </div>
</template>

<style scoped>
.panel {
  width: 50vw;
  background: white;
  position: sticky;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  border-radius: 60px;
  border: 1px solid #2c3e50;
}

.panel:hover {
}

.btn-nav {
  padding: 10px;
  margin: 2px;
}

.nav-bar {
  padding: 20px;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
}

nav a {
  margin-left: 1rem;
  text-decoration: none;
}

nav a:hover {
}
</style>
