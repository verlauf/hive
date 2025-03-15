<script setup lang="ts">
const { isHeaderVisible } = useVisibility();

</script>

<template>
<div>
  info

  <button @click="isHeaderVisible = !isHeaderVisible">
    {{ isHeaderVisible ? "Header ausblenden" : "Header einblenden" }}

  </button>

</div>
</template>

<style scoped>

</style>