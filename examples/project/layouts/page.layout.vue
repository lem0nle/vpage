<template>
  <ProjectHeader />
  <main class="mt-16 mx-auto px-4 prose text-gray-800 max-w-screen-sm">
    <slot />
  </main>
  <ProjectFooter />
</template>

<script setup lang="ts">
import ProjectHeader from '../components/ProjectHeader.vue'
import ProjectFooter from '../components/ProjectFooter.vue'
</script>
