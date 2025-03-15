<template>
  <div>
    <h1>Mein Portfolio</h1>
    <ul>
      <div v-if="data && data.length">
      <li v-for="project in data" :key="project.id">
        <strong>{{ project.title }}</strong>: {{ project.description }}
      </li>
      </div>
    </ul>
  </div>
</template>

<script setup>
const { data } = useApi("/projects");
console.log('res', data);
</script>