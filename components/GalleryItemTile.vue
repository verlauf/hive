<script setup>
defineProps({
  title: String,
  description: String,
  id: Number,
  position: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})
</script>

<template>
  <div class="tile">
    {{ position.left }} {{ position.top }}
    <strong>{{ title }}</strong>: {{ description }}
    <NuxtLink :to="`/gallery/${id}`">project {{ id }}</NuxtLink>
  </div>
</template>

<style>
.tile {
  height: 400px;
  background: #ededed;
  padding: 10px;
  margin: 4px;
  background: var(--bg-tile);
}

[data-theme="dark"] {
  .tile {
    background: var(--bg-tile-dark);
  }
}
</style>
