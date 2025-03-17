<script setup>
import {useControlPanelStore} from "~/stores/controlPanel.js";
import {storeToRefs} from "pinia";
import Gallery from "~/components/Gallery.vue";

const {isControlPanelMinimized} = storeToRefs(useControlPanelStore());
const {minimizeControlPanel, maximizeControlPanel} = useControlPanelStore();

onMounted(() => {
  window.addEventListener('scroll', (e) => {
    if (!isControlPanelMinimized.value && window.scrollY > 100) {
      minimizeControlPanel();
      e.preventDefault()
    }
    if (isControlPanelMinimized.value && window.scrollY < 100) {
      maximizeControlPanel();
      e.preventDefault()
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', () => {
  });
})
</script>

<template>
  <ControlPanel/>

  <div>
    <main>
      <Gallery/>
      <NuxtPage/>
    </main>
    <Footer/>
  </div>
</template>
