<template>
  <div>
    <h1>Mein Portfolio</h1>
    <ul>
      <li v-for="project in data" :key="project.id">
        <strong>{{ project.title }}</strong>: {{ project.description }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data } = useApi("/projects");
console.log('res', data);
</script>