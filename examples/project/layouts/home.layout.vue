<template>
  <ProjectBanner />
  <main class="mt-16 mx-auto px-4 prose max-w-screen-sm">
    <slot />
  </main>
  <ProjectFooter />
</template>

<script setup lang="ts">
import ProjectBanner from '../components/ProjectBanner.vue'
import ProjectFooter from '../components/ProjectFooter.vue'
</script>
