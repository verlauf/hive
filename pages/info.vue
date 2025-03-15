<script setup lang="ts">
const { isHeaderVisible } = useVisibility();

</script>

<template>
<div>
  info

  <button class="btn" @click="isHeaderVisible = !isHeaderVisible">
    {{ isHeaderVisible ? "Header ausblenden" : "Header einblenden" }}
  </button>

</div>
</template>

<style scoped>
.btn {
  color: #ffffff;
  background-color: #2c3e50;
}

</style>