<script setup>
defineProps({
  title: String,
  description: String,
  id: Number
})
</script>

<template>
      <div class="item">
        <strong>{{ title }}</strong>: {{ description }}
      </div>
</template>

<style>
.item {
  height: 400px;
  border: 1px solid #333333;
  padding: 10px;
  margin: 10px;
}
</style>