<template>
  <header v-if="isHeaderVisible" class="header">
    <h1>HIVE</h1>
    <!--
    <button @click="isDark = !isDark">
     xxx {{ currentTheme }}
    </button>
    -->
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/info">Info</NuxtLink>
      <NuxtLink to="/gallery">Gallery</NuxtLink>

    </nav>
  </header>
</template>

<script setup>
const { isDark } = useDarkMode();

const currentTheme = computed(() => isDark.value ? "dark" : "light" );

const isHeaderVisible  = useVisibility();
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