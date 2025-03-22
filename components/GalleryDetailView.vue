<script setup lang="ts">
defineProps({
  title: String,
})

const emit = defineEmits({
  event: 'someEvent'
})


const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('someEvent')
    console.log('escape');
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})

</script>

<template>
  <div class="bg-wrapper">
    <div class="content-wrapper">
      debug {{ title }}

      <button @click="$emit('someEvent')">close</button>
    </div>
  </div>
</template>

<style scoped>
.bg-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #333333;
}

.content-wrapper {
  position: absolute;
  z-index: 100;
  border: 1px solid #ff0000;
  top: 10px;
  bottom: 10px;
  background: #FFFFFF;
  height: 1400px;
  overflow-y: scroll;
}
</style>
