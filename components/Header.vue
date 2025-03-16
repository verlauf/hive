<template>
  <header v-if="isHeaderVisible" class="header">
    <h1>HIVE</h1>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/info">Info</NuxtLink>
      <NuxtLink to="/gallery">Gallery</NuxtLink>

    </nav>
  </header>
</template>

<script setup>
const { isDark } = useDarkMode();
const isHeaderVisible  = useVisibility();
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #333;
  color: white;
}
nav a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
</style>