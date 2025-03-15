<template>
  <header v-if="isHeaderVisible" class="header">
    <h1>HIVE</h1>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/info">Info</NuxtLink>
    </nav>
  </header>
</template>

<script setup>
const { isHeaderVisible } = useVisibility();
console.log(isHeaderVisible);
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