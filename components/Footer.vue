<script setup lang="ts">

import Header from "~/components/Header.vue";
</script>

<template>
    <footer class="footer">
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
      </nav>
    </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  background-color: #cccccc;
}
</style>