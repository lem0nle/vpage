<template>
  <div class="prose prose-blue">
    <h1>Demos</h1>
    <ul>
      <!-- use <a-router> to prepend base url to links when exists -->
      <li>
        <a-router href="/demos/personal" target="_blank"
          >Personal demo</a-router
        >
      </li>
      <li>
        <a-router href="/demos/project" target="_blank">Project demo</a-router>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export { default as Layout } from '../layouts/home.layout.vue'
</script>
